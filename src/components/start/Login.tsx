import { emailValid, passwordValid } from "@utils/valids";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "allTypes/user";
import Input from "@elements/Input";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "@elements/ErrorMessage";
import cls from "@utils/cls";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILogin>();

  // 로그인 기능
  const onValidSubmit = useCallback((data: ILogin) => {
    //const response = await loginFn(data);
    // 실패했을 때 함수
    // 성공했을 때 함수
    console.log(data);
    alert("제출");
  }, []);

  // 카카오 로그인 버튼
  const onClickKakao = useCallback(() => {}, []);

  return (
    <>
      <p className="mt-[20px] text-center text-[24px] font-bold leading-[32px]">
        같은 목표를 가진 <br />
        스터디원들과 <strong className="text-primary-main">모인다</strong>!
      </p>
      <span className="mt-[16px] mb-[62px] text-center  text-[16px] text-primary-500">
        로그인하면 모든 서비스를 이용할 수 있습니다.
      </span>
      <form onSubmit={handleSubmit(onValidSubmit)} className="flex flex-col">
        <Input
          register={{ ...register("email", emailValid()) }}
          type="email"
          placeholder="이메일을 입력해주세요."
          label="이메일"
        />
        <ErrorMessage className="mb-[24px]" text={errors.email?.message} />
        <Input
          register={{ ...register("password", passwordValid()) }}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          label="비밀번호"
        />
        <ErrorMessage className="mb-[44px]" text={errors.password?.message} />
        <button
          className={cls(
            "rounded-[30px] bg-[rgba(0,0,0,0.05)] py-[18px] text-primary-400 transition-colors",
            watch("email")?.length > 5 && watch("password")?.length > 7
              ? "bg-primary-main text-primary-100"
              : ""
          )}
        >
          이메일로 로그인
        </button>
      </form>
      <ul className="mt-[52px] flex justify-center space-x-[24px]">
        <li className="flex flex-col items-center">
          <button className="aspect-square w-[66px] rounded-full bg-[#E3E3E3]"></button>
          <span className="text-[14px] text-primary-500">Google</span>
        </li>
        <li className="flex flex-col items-center">
          <button
            onClick={onClickKakao}
            className="aspect-square w-[66px] rounded-full bg-[#E3E3E3]"
          ></button>
          <span className="text-[14px] text-primary-500">Kakao</span>
        </li>
        <li className="flex flex-col items-center">
          <button className="aspect-square w-[66px] rounded-full bg-[#E3E3E3]"></button>
          <span className="text-[14px] text-primary-500">Social</span>
        </li>
      </ul>
      <span className="mt-[46px] text-center text-[1rem] text-primary-600">
        모인다{" "}
        <strong
          className="cursor-pointer border-b border-primary-600 font-normal hover:border-primary-500 hover:text-primary-500"
          onClick={() => navigate("/start/signup")}
        >
          회원가입
        </strong>
      </span>
    </>
  );
};

export default Login;
