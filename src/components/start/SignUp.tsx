import { checkEmail, checkNickname, signUp } from "@apis/query/userApi";
import ErrorMessage from "@elements/ErrorMessage";
import Input from "@elements/Input";
import InputWithButton from "@elements/InputWithButton";
import Label from "@elements/Label";
import cls from "@utils/cls";
import { emailValid, nicknameValid, passwordValid } from "@utils/valids";
import { ISignUpForm } from "allTypes/user";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import CheckSvg from "@assets/svg/CheckSvg.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    getValues,
    formState: { errors },
  } = useForm<ISignUpForm>({ mode: "onChange" });
  const navigate = useNavigate();
  const [codeNum, setCodeNum] = useState(0);
  const [isValidCode, setIsValidCode] = useState(false);
  const [isValidNick, setIsValidNick] = useState(false);

  // 이메일 인증
  const emailDup = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      const { status, data } = await checkEmail({ email: getValues("email") });
      console.log(status, data);
      if (status !== 201) return alert("사용할 수 없는 이메일입니다.");
      // response로 받은 인증번호를 codeNum에 저장
      setCodeNum(data);
    },
    [getValues]
  );

  // 이메일 인증번호 검사
  const codeValid = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (codeNum !== +getValues("emailCode")) {
        return setError(
          "emailCode",
          { message: "인증번호가 일치하지 않습니다." },
          { shouldFocus: true }
        );
      }
      setIsValidCode(true);
    },
    [codeNum, getValues, setError]
  );

  // 닉네임 중복 검사
  const nicknameDup = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      const response = await checkNickname({ nickname: getValues("nickname") });
      console.log(response);
      // 존재할 시에 setError "사용 불가능한 닉네임입니다."
      if (response.status !== 201) {
        return setError(
          "nickname",
          { message: "사용할 수 없는 이메일입니다." },
          { shouldFocus: true }
        );
      }
      setIsValidNick(true);
    },
    [getValues, setError]
  );

  // 회원가입 기능
  const onValidSubmit = useCallback(
    async (data: ISignUpForm) => {
      const { email, password, nickname, confirmPassword } = data;
      if (confirmPassword !== password) {
        return setError(
          "confirmPassword",
          { message: "비밀번호가 일치하지 않습니다." },
          { shouldFocus: true }
        );
      }
      const response = await signUp({
        email,
        password,
        nickname,
      });
      console.log(response);
      // 실패했을 때 함수
      // 성공했을 때 함수
      // navigate("start/login");
    },
    [setError]
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
        <Label
          className={cls(
            " flex flex-col",
            codeNum ? "mb-[1rem]" : "mb-[2.4rem]"
          )}
          label="이메일"
        >
          <InputWithButton
            register={{
              ...register("email", emailValid()),
            }}
            type="email"
            placeholder="이메일을 입력해주세요."
            buttonText="이메일 인증"
            disabled={isValidCode}
            btnClass={
              watch("email")?.length && !errors?.email && !isValidCode
                ? "activeStartBtn"
                : "startBtn"
            }
            onClick={emailDup}
          />
          <ErrorMessage text={errors.email?.message} />
        </Label>

        {codeNum !== 0 && (
          <Label className="mb-[2.4rem]">
            <InputWithButton
              register={{ ...register("emailCode", { required: true }) }}
              type="number"
              placeholder="인증번호"
              buttonText="인증 확인"
              // onClick={codeValid}
              btnClass={isValidCode ? "disabledCodeBtn" : "codeBtn"}
              inputClass={isValidCode ? "disabledInput" : "startInput"}
              disabled={isValidCode}
              onClick={codeValid}
            />
            <ErrorMessage text={errors.emailCode?.message} />
          </Label>
        )}

        <Label className="mb-[2.4rem]" label="닉네임">
          <InputWithButton
            register={{ ...register("nickname", nicknameValid()) }}
            type="text"
            placeholder="닉네임을 입력해주세요."
            buttonText="중복검사"
            onClick={nicknameDup}
            disabled={isValidNick}
            btnClass={
              watch("nickname")?.length && !errors?.nickname && !isValidNick
                ? "activeStartBtn"
                : "startBtn"
            }
          >
            {isValidNick && (
              <span className="flex-center absolute right-[13rem] h-[2rem] w-[2rem] rounded-full bg-primary-main">
                <img
                  src={CheckSvg}
                  alt="Nickname check"
                  className="h-[0.9rem] w-[1.2rem]"
                />
              </span>
            )}
          </InputWithButton>
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
              register={{
                ...register("confirmPassword", passwordValid()),
              }}
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
            !watch("password") ||
            !watch("confirmPassword") ||
            Boolean(errors?.password) ||
            Boolean(errors?.confirmPassword) ||
            !isValidCode ||
            !isValidNick
          }
        >
          가입하기
        </button>
      </form>
    </>
  );
};

export default SignUp;
