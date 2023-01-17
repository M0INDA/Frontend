import { removeCookieToken } from "@shared/cookie";
import { Cookies } from "react-cookie";
import { useEffect, useState } from "react";
import { isExpired } from "react-jwt";
import { useNavigate } from "react-router-dom";

/**
 * 토큰이 없거나 만료되었다면 login 페이지로 이동
 * 토큰이 있다면 decoding한 정보를 리턴
 */
const useUser = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const cookies = new Cookies();
    const myToken = cookies.get("Authorization");

    if (!myToken) {
      alert("로그인이 필요한 서비스입니다.");
      return navigate("/login");
    }

    const isTokenExpired = isExpired(myToken);

    if (isTokenExpired) {
      alert("로그인이 필요한 서비스입니다.");
      removeCookieToken();
      return navigate("/login");
    }

    setUser(myToken);
  }, [navigate]);

  return { user, logOut: removeCookieToken };
};

export default useUser;
