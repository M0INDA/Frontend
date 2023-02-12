import axios from "axios";
import { useEffect } from "react";

const KakaoLogin = () => {
  const kakaoToken = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    (async () => {
      try {
        const kakaoResult = await axios.post(
          "http://localhost:3000/auth/kakao",
          {
            code: kakaoToken,
            domain: window.location.origin,
          },
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
      } catch (e) {
        console.log("에러");
        // window.location.replace("/");
      }
    })();
  }, [kakaoToken]);

  return <div>소셜로그인중</div>;
};

export default KakaoLogin;
