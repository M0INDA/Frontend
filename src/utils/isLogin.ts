import { removeCookieToken } from "@apis/cookie";
import { Cookies } from "react-cookie";
import { isExpired } from "react-jwt";

export const isExistToken = () => {
  const cookies = new Cookies();
  const myToken = cookies.get("accessToken");
  if (!myToken) return false;
  const isTokenExpired = isExpired(myToken);
  if (isTokenExpired) {
    removeCookieToken();
    return false;
  } else return true;
};
