import { emailValid, nicknameValid, passwordValid } from "@utils/valids";
import { ISignUp } from "allTypes/user";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
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
    <form
      onSubmit={handleSubmit(onValidSubmit)}
      className="mx-auto flex w-80 flex-col"
    >
      <div>
        <input
          {...register("email", emailValid())}
          type="email"
          placeholder="email"
        />
        <button onClick={emailDup}>인증</button>
      </div>
      {codeNum !== 0 && (
        <div>
          <input type="number" />
          <button onClick={codeValid}>인증</button>
        </div>
      )}

      <span>{errors.email?.message}</span>
      <input
        {...register("password", passwordValid())}
        type="password"
        placeholder="Password"
      />
      <span>{errors.password?.message}</span>
      <div>
        <input
          {...register("nickname", nicknameValid())}
          type="text"
          placeholder="Nickname"
        />
        <button onClick={nicknameDup}>중복검사</button>
      </div>
      <span>{errors.nickname?.message}</span>
      <button>회원가입</button>
    </form>
  );
};

export default SignUp;
