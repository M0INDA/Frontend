import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <div className="w-[640px] bg-slate-500">
      <form
        className="border-spacing-1"
        onSubmit={handleSubmit(async (data) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(data));
        })}
      >
        <input
          className="mr-5"
          id="id"
          type="text"
          {...register("id", {
            required: "이메일은 필수 입력입니다.",
          })}
        />
        <input
          className="mr-5"
          id="password"
          type="password"
          {...register("password")}
        />
        <input
          id="passwordcheck"
          type="password"
          {...register("passwordcheck")}
        />
        <input type="file" />
        <button type="submit" disabled={isSubmitting}>
          가입하기
        </button>
      </form>
    </div>
  );
};

export default SignUp;
