import { removeCookieToken } from "@apis/cookie";
import { Cookies } from "react-cookie";
import { useEffect, useState } from "react";
import { isExpired } from "react-jwt";
import { useNavigate } from "react-router-dom";

/*
  
*/
const useUser = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const cookies = new Cookies();
    const myToken = cookies.get("accessToken");
    const isTokenExpired = isExpired(myToken);
    if (!myToken) {
      alert("로그인이 필요한 서비스입니다.");
      return navigate("/start/login");
    }

    if (isTokenExpired) {
      alert("로그인이 필요한 서비스입니다.");
      removeCookieToken();
      return navigate("/login");
    }

    setUser(myToken);
  }, [navigate]);

  return [user, removeCookieToken];
};

export default useUser;
