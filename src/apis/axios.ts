import axios from "axios";
import { getAccessToken, getRefreshToken } from "./cookie";

const myToken = getAccessToken();

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Cache-Control": "no-cache",
    Authorization: myToken,
    withCredentials: true,
  },
});

export const postApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: myToken,
    "Cache-Control": "no-cache",
    withCredentials: true,
  },
});

// 리프레시 토큰을 발급 중인지 확인하는 boolean 값
let isTokenRefreshing = false;

// 실패한 요청들의 배열
let refreshSubscribers: Array<(accessToken: string) => void> = [];

// 실패한 요청들을 배열에 추가해주는 함수
const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

// 실패한 요청들을 다시 실행시켜주는 함수
const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;

    if (status === 401) {
      if (!isTokenRefreshing) {
        // isTokenRefreshing이 false인 경우에만 token refresh 요청
        isTokenRefreshing = true;
        const refreshToken = getRefreshToken();
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}auth/refreshAccessToken`, // token refresh api
          {
            refreshToken,
          }
        );
        // 새로운 토큰 저장
        const { accessToken: newAccessToken } = data;
        isTokenRefreshing = false;
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        // 새로운 토큰으로 지연되었던 요청 진행
        onTokenRefreshed(newAccessToken);
      }

      // token이 재발급 되는 동안의 요청은 refreshSubscribers에 추가
      const retryOriginalRequest = new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          // 갱신한 accessToken으로 재설정
          originalRequest.headers.Authorization = "Bearer " + accessToken;
          // originalRequest를 다시 실행
          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

export default instance;
