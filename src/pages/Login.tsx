import { emailValid, passwordValid } from "@utils/valids";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "allTypes/user";
import Input from "@elements/Input";
const Login = () => {
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
    <form
      onSubmit={handleSubmit(onValidSubmit)}
      className="mx-auto flex w-80 flex-col"
    >
      <Input
        register={{ ...register("email", emailValid()) }}
        type="email"
        placeholder="Email"
      />
      <span>{errors.email?.message}</span>
      <Input
        register={{ ...register("password", passwordValid()) }}
        type="password"
        placeholder="Password"
      />
      <span>{errors.password?.message}</span>
      <button>로그인</button>
      <button onClick={onClickKakao}>카카오 로그인</button>
    </form>
  );
};

export default Login;
