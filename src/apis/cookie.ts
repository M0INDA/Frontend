import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken: string) => {
  return cookies.set("Authorization", accessToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getCookieToken = () => {
  return cookies.get("Authorization");
};

export const removeCookieToken = () => {
  return cookies.remove("Authorization", { sameSite: "strict", path: "/" });
};
