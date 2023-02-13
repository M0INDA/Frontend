import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken: string) => {
  return cookies.set("accessToken", accessToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getAccessToken = () => {
  return cookies.get("accessToken");
};

export const setRefreshToken = (refreshToken: string) => {
  return cookies.set("refreshToken", refreshToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getRefreshToken = () => {
  return cookies.get("refreshToken");
};

export const removeCookieToken = () => {
  cookies.remove("accessToken", { sameSite: "strict", path: "/" });
  return cookies.remove("accessToken", { sameSite: "strict", path: "/" });
};
