import axios from "axios";
import { useEffect } from "react";

const KakaoLogin = () => {
  const kakaoToken = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    (async () => {
      try {
        const kakaoResult = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&code=${kakaoToken}`,
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        console.log(kakaoResult);
        // if (kakaoResult.status !== 200) return;
        // const token = kakaoResult.data.access_token;
        // const response = await axios.post(
        //   `${process.env.REACT_APP_SERVER_URL}auth/kakao`,

        //   kakaoResult.data,
        //   {
        //     headers: {
        //       authorization: `Bearer ${token}`,
        //       "Content-type": "application/x-www-from-urlencoded",
        //     },
        //   }
        // );
        // console.log(response);
        // console.log(token);
        // const {
        //   status,
        //   data: { accessToken, refreshToken },
        // } = response;
        // console.log("res", response);
        // if (status !== 200) return;
        // setAccessToken(accessToken);
        // setRefreshToken(refreshToken);
        // window.location.replace("/concerts");
      } catch (e) {
        console.log("에러");

        // window.location.replace("/");
      }
    })();
  }, [kakaoToken]);

  return <div>소셜로그인중</div>;
};

export default KakaoLogin;
