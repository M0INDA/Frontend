import ErrorMessage from "@elements/ErrorMessage";
import Input from "@elements/Input";
import cls from "@utils/cls";
import { emailValid, nicknameValid, passwordValid } from "@utils/valids";
import { ISignUp } from "allTypes/user";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUp>();

  const [codeNum, setCodeNum] = useState(0);

  // 로그인 기능
  const onValidSubmit = useCallback((data: ISignUp) => {
    //const response = await loginFn(data);
    // 실패했을 때 함수
    // 성공했을 때 함수
  }, []);

  // 이메일 인증
  const emailDup = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setCodeNum(1);
  }, []);

  // 닉네임 중복 검사
  const nicknameDup = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  }, []);

  // 이메일 인증번호 검사
  const codeValid = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <h1 className="mt-[2.4rem] text-[1.3rem] font-medium text-primary-700">
        회원가입
      </h1>
      <form
        onSubmit={handleSubmit(onValidSubmit)}
        className="flex flex-col pt-[20px]"
      >
        <div className="mb-[1.6rem] flex flex-col space-y-[10px]">
          <Input
            register={{ ...register("email", emailValid()) }}
            type="email"
            placeholder="이메일을 입력해주세요."
            label="이메일"
            buttonText="이메일 인증"
            onClick={emailDup}
          />
          {errors?.email && <ErrorMessage text={errors.email?.message} />}

          {codeNum !== 0 && (
            <Input
              register={{ ...register("emailCode", { required: true }) }}
              type="number"
              placeholder="인증번호"
              buttonText="인증 확인"
              onClick={codeValid}
            />
          )}
        </div>

        <div className="mb-[1.6rem]">
          <Input
            register={{ ...register("nickname", nicknameValid()) }}
            type="text"
            placeholder="닉네임을 입력해주세요."
            buttonText="중복검사"
            onClick={nicknameDup}
            label="닉네임"
          />
          <ErrorMessage text={errors.nickname?.message} />
        </div>
        <Input
          register={{ ...register("password", passwordValid()) }}
          type="password"
          placeholder="비밀번호는 영어, 특수문자 포함 8~20자리 입니다."
          label="비밀번호"
        />
        <ErrorMessage text={errors.password?.message} className="mb-[10px]" />
        <Input
          register={{ ...register("passwordCheck", passwordValid()) }}
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요."
        />
        <ErrorMessage
          text={errors.passwordCheck?.message}
          className="mb-[10px]"
        />
        <button
          className={cls(
            "mt-[10vh] rounded-[30px] bg-[rgba(0,0,0,0.05)] py-[18px] text-primary-400 transition-colors",
            watch("password")?.length > 7 && watch("passwordCheck")?.length > 7
              ? "bg-primary-main text-primary-100"
              : ""
          )}
        >
          가입하기
        </button>
      </form>
    </>
  );
};

export default SignUp;
