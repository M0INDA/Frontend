import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken: string) => {
  return cookies.set("Authorization", accessToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const setRefreshToken = (refreshToken: string) => {
  return cookies.set("RefreshToken", refreshToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getCookieToken = () => {
  return cookies.get("Authorization");
};

export const getRefreshToken = () => {
  return cookies.get("");
};

export const removeCookieToken = () => {
  return cookies.remove("Authorization", { sameSite: "strict", path: "/" });
};

let refreshSubscribers: Array<(accessToken: string) => void> = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  // 응답 에러가 발생하였을 때
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    // 기존에 보냈던 요청을 originalRequest에 할당
    const originalRequest = config;
    // 인증 에러일 경우에 실행
    if (status === 401) {
      // 배열에 실패한
      addRefreshSubscriber(originalRequest);
      // 실패요청을 담아둔 배열의 길이가 1 미만일 때 accessToken을 재발급하는 요청 수행
      if (refreshSubscribers.length < 1) {
        const refreshToken = getRefreshToken();
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}auth/refreshAccessToken`, // token refresh api
          {
            refreshToken,
          }
        );
        // 새로운 토큰 저장
        const { accessToken: newAccessToken } = data;
        setAccessToken(newAccessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        // 새로운 토큰으로 지연되었던 요청 진행
        onTokenRefreshed(newAccessToken);
      }
      // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
      const retryOriginalRequest = new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          originalRequest.headers.Authorization = "Bearer " + accessToken;
          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

// refreshToken은 res.cookie로 설정  accessToken은 응답 body로 받아 setCookie()로 설정  => refreshToken은 httpOnly 옵션으로 설정.

// instance 사용시에 accessToken을 headers로 전달

// accessToken이 만료되었을 때 쿠키에서 refreshToken을 꺼내와 headers or body로 전달.

// refreshToken이 만료되지 않았다면 accessToken을 응답 body로 받아 setCookie() 설정

// refreshToken이 만료되었다면 login page 이동(?)

// ?
// ex) 한 페이지에서 서버로 여러 요청을 보낼 때 accessToken이 만료되었다면 ?
// 문제점 : 첫 번째 요청이 끝날 때까지 다른 요청들을 미뤄야한다.
