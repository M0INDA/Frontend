import { useForm } from "react-hook-form";

interface IForm {
  email: String;
  password: String;
  passwordConfirm: String;
  nickname: String;
}

const SignUp = () => {
  // //email 정규식 표현
  // const emailReg =
  //   /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  // //password 정규식 표현
  // const passwordReg =
  //   // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
  //   /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/g;
  //react-hook-form 사용
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm<IForm>();

  //submit 되었을 때 실행될 함수
  const onValid = (data: IForm) => {
    console.log(data);
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "패스워드가 같지 않습니다!" },
        { shouldFocus: true }
      );
    }
  };
  console.log(errors);
  return (
    <div className="ml-5 h-[100px] w-[640px] bg-slate-500 p-4">
      <form className="border-spacing-1" onSubmit={handleSubmit(onValid)}>
        <input
          className="mr-5"
          type="text"
          placeholder="email"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
              message: "메일 형식이 아닙니다",
            },
          })}
        />
        <span>{errors?.email?.message}</span>
        <input
          className="mr-5"
          type="password"
          placeholder="password"
          {...(register("password"),
          {
            required: "비밀번호를 입력해주세요.",
            maxLength: {
              value: 15,
              messave: "15자 이하만 가능합니다",
            },
            minLength: {
              value: 8,
              message:
                "8자 이상 15자 이하 특수기호 사용해서 안전하게 만들어주세요!",
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
              message: "형식이 맞지 않습니다",
            },
          })}
        />
        <span>{errors?.password?.message}</span>
        <input
          type="password"
          placeholder="passwordConfirm"
          {...(register("passwordConfirm"),
          {
            // required: "같은 비밀번호를 입력해주세요.",
            // minLength: {
            //   value: 8,
            //   message: "8자 이상, 특수기호 사용해서 확인해 주세요!",
            // },
          })}
        />
        <span>{errors?.passwordConfirm?.message}</span>
        <input
          type="text"
          className="mr-5 mt-5"
          placeholder="nickname"
          {...(register("nickname"),
          {
            // required: "닉네임을 입력해주세요",
            // minLength: {
            //   value: 2,
            //   message: "닉네임은 두글자 이상만 가능합니다!",
            // },
          })}
        />
        <button type="submit" disabled={isSubmitting}>
          sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
