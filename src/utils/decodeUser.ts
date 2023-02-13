import { Cookies } from "react-cookie";
import { decodeToken } from "react-jwt";

const cookies = new Cookies();

const myToken = cookies.get("accessToken");

// 임시 토큰 디코딩 . userId만 들어감
export const decodeUser = () => decodeToken(myToken);
