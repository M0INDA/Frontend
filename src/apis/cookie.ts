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
