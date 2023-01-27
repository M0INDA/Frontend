import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refreshToken: string) => {
  return cookies.set("RefreshToken", refreshToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getRefreshToken = () => {
  return cookies.get("RefreshToken");
};

export const removeCookieToken = () => {
  cookies.remove("RefreshToken", { sameSite: "strict", path: "/" });
  return cookies.remove("Authorization", { sameSite: "strict", path: "/" });
};

// refreshToken은 res.cookie로 설정  accessToken은 응답 body로 받아 setCookie()로 설정  => refreshToken은 httpOnly 옵션으로 설정.

// instance 사용시에 accessToken을 headers로 전달

// accessToken이 만료되었을 때 쿠키에서 refreshToken을 꺼내와 headers or body로 전달.

// refreshToken이 만료되지 않았다면 accessToken을 응답 body로 받아 setCookie() 설정

// refreshToken이 만료되었다면 login page 이동(?)

// ?
// ex) 한 페이지에서 서버로 여러 요청을 보낼 때 accessToken이 만료되었다면 ?
// 문제점 : 첫 번째 요청이 끝날 때까지 다른 요청들을 미뤄야한다.
