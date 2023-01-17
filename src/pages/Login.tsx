import { emailValid, passwordValid } from "@utils/valids";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "allTypes/user";
import Input from "@elements/Input";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  // 로그인 기능
  const onValidSubmit = useCallback((data: ILogin) => {
    //const response = await loginFn(data);
    // 실패했을 때 함수
    // 성공했을 때 함수
  }, []);

  // 카카오 로그인 버튼
  const onClickKakao = useCallback(() => {}, []);

  return (
    <div className="flex h-screen items-center justify-center bg-[#F6F6F6]">
      <main className="flex h-full max-h-[812px] w-full max-w-[412px] flex-col bg-primary-100 p-[22px]">
        <div className="relative flex items-center">
          <span>&larr;</span>
          <h1 className="absolute w-full text-center text-primary-main">
            MOINDA
          </h1>
        </div>
        <p className="text-center">
          같은 목표를 가진 <br />
          스터디원들과 모인다!
        </p>
        <span className="text-center">
          로그인하면 모든 서비스를 이용할 수 있습니다.
        </span>
        <form onSubmit={handleSubmit(onValidSubmit)} className="flex flex-col">
          <label>이메일</label>
          <Input
            register={{ ...register("email", emailValid()) }}
            type="email"
            placeholder="이메일을 입력해주세요."
          />
          <span>{errors.email?.message}</span>
          <label>비밀번호</label>
          <Input
            register={{ ...register("password", passwordValid()) }}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <span>{errors.password?.message}</span>
          <button className="rounded-[30px] bg-slate-100 py-[18px]">
            이메일로 로그인
          </button>
        </form>
        <ul className="flex  justify-center space-x-[24px]">
          <li className="flex flex-col items-center">
            <button className="aspect-square w-[66px] rounded-full bg-[#E3E3E3]"></button>
            <span>Google</span>
          </li>
          <li className="flex flex-col items-center">
            <button
              onClick={onClickKakao}
              className="aspect-square w-[66px] rounded-full bg-[#E3E3E3]"
            ></button>
            <span>Kakao</span>
          </li>
          <li className="flex flex-col items-center">
            <button className="aspect-square w-[66px] rounded-full bg-[#E3E3E3]"></button>
            <span>Social</span>
          </li>
        </ul>
        <span onClick={() => navigate("/signup")} className="cursor-pointer">
          모인다 회원가입
        </span>
      </main>
    </div>
  );
};

export default Login;
