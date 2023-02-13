import { Cookies } from "react-cookie";

const cookies = new Cookies();

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
  cookies.remove("refreshToken", { sameSite: "strict", path: "/" });
  return cookies.remove("Authorization", { sameSite: "strict", path: "/" });
};
