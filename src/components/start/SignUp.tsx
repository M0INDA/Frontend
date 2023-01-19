import {
  checkEmail,
  //checkEmailNum,
  checkNickname,
  //signUp,
} from "@apis/query/userApi";
import ErrorMessage from "@elements/ErrorMessage";
import Input from "@elements/Input";
import InputWithButton from "@elements/InputWithButton";
import Label from "@elements/Label";
import cls from "@utils/cls";
import { emailValid, nicknameValid, passwordValid } from "@utils/valids";
import { ISignUpForm } from "allTypes/user";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    //setError,
    getValues,
    formState: { errors },
  } = useForm<ISignUpForm>();

  const [codeNum, setCodeNum] = useState(0);
  //const [isValidCode, setIsValidCode] = useState(false);

  // 회원가입 기능
  const onValidSubmit = useCallback(
    async (data: ISignUpForm) => {
      // const { email, password, nickname } = data;
      // if (password === confirmPassword) {
      //   setError(
      //     "confirmPassword",
      //     { message: "비밀번호가 일치하지 않습니다." },
      //     { shouldFocus: true }
      //   );
      // }
      // if (!isValidCode) {
      //   return setError(
      //     "emailCode",
      //     { message: "비밀번호가 일치하지 않습니다." },
      //     { shouldFocus: true }
      //   );
      // }
      // const response = await signUp({
      //   email,
      //   password,
      //   confirmPassword,
      //   nickname,
      // });
      // 실패했을 때 함수
      // 성공했을 때 함수
    },
    []
    // [setError]
  );

  // 이메일 인증
  const emailDup = useCallback(async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // const response = await checkEmail({ email: getValues("email") });
    setCodeNum(1);
  }, []);

  // 닉네임 중복 검사
  const nicknameDup = useCallback(async (e: React.MouseEvent<HTMLElement>) => {
    // const response = await checkNickname({ nickname: getValues("nickname") });
    // setIsValidCode()
    e.preventDefault();
  }, []);

  // 이메일 인증번호 검사
  const codeValid = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      // if (codeNum !== getValues("emailCode")) return;
      // const response = await checkEmailNum({
      //   emailCode: getValues("emailCode"),
      // });
    },
    []
    //[codeNum, getValues]
  );

  return (
    <>
      <h1 className="mt-[3.6rem] text-[1.8rem] font-medium text-primary-700">
        회원가입
      </h1>
      <form
        onSubmit={handleSubmit(onValidSubmit)}
        className="flex flex-col pt-[2rem]"
      >
        <Label className="mb-[2.4rem] flex flex-col" label="이메일">
          <InputWithButton
            register={{ ...register("email", emailValid()) }}
            type="email"
            placeholder="이메일을 입력해주세요."
            buttonText="이메일 인증"
            onClick={emailDup}
          />
          <ErrorMessage text={errors.email?.message} />
        </Label>

        {codeNum !== 0 && (
          <Label>
            <InputWithButton
              register={{ ...register("emailCode", { required: true }) }}
              type="number"
              placeholder="인증번호"
              buttonText="인증 확인"
              onClick={codeValid}
            />
          </Label>
        )}

        <Label className="mb-[2.4rem]" label="닉네임">
          <InputWithButton
            register={{ ...register("nickname", nicknameValid()) }}
            type="text"
            placeholder="닉네임을 입력해주세요."
            buttonText="중복검사"
            onClick={nicknameDup}
          />
          <ErrorMessage text={errors.nickname?.message} />
        </Label>

        <Label label="비밀번호">
          <Input
            register={{ ...register("password", passwordValid()) }}
            type="password"
            placeholder="비밀번호는 영어, 특수문자 포함 8~20자리 입니다."
          />
          <ErrorMessage text={errors.password?.message} />
        </Label>
        <Label className="mt-[1.4rem]">
          <>
            <Input
              register={{ ...register("confirmPassword", passwordValid()) }}
              type="password"
              placeholder="비밀번호를 다시 한번 입력해주세요."
            />
            <ErrorMessage text={errors.confirmPassword?.message} />
          </>
        </Label>
        <button
          className={cls(
            "mt-[10vh] rounded-[3rem] bg-primary-main py-[1.8rem] text-[1.6rem] text-primary-100 transition-colors disabled:bg-[rgba(0,0,0,0.05)] disabled:text-primary-400"
          )}
          disabled={
            (!watch("password") && !watch("confirmPassword")) ||
            watch("password")?.length < 7 ||
            watch("confirmPassword")?.length < 7
          }
        >
          가입하기
        </button>
      </form>
    </>
  );
};

export default SignUp;
