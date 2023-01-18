import Input from "@elements/Input";
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
        <Input
          register={{ ...register("email", emailValid()) }}
          type="email"
          placeholder="이메일을 입력해주세요."
          label="이메일"
          buttonText="이메일 인증"
          onClick={emailDup}
        />
        <button onClick={emailDup}>
          {codeNum ? "인증번호 재전송" : "이메일 인증"}
        </button>
      </div>
      {codeNum !== 0 && (
        <div>
          <Input
            register={{ ...register("emailCode") }}
            type="number"
            placeholder="인증번호"
          />
          <button onClick={codeValid}>인증</button>
        </div>
      )}

      <span>{errors.email?.message}</span>
      <Input
        register={{ ...register("password", passwordValid()) }}
        type="password"
        placeholder="Password"
      />
      <span>{errors.password?.message}</span>
      <div>
        <Input
          register={{ ...register("nickname", nicknameValid()) }}
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
