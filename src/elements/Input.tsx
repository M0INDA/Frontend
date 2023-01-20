import cls from "@utils/cls";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  className?: string;
}

const styles = {
  start:
    "h-[5.8rem] text-[1.4rem] rounded border border-primary-200 placeholder:font-sans  placeholder:font-light placeholder:text-primary-400 focus:border-primary-main focus:outline-none focus:ring-transparent text-primary-700 ",
};

const Input = ({ type, placeholder, register, className }: IInput) => {
  return (
    <input
      {...register}
      type={type}
      placeholder={placeholder}
      className={cls(styles.start)}
      autoComplete={type === "password" ? "new-password" : "off"}
    />
  );
};

export default Input;
