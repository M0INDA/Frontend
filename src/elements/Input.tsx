import type { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

const Input = ({ type, placeholder, register }: IInput) => {
  return (
    <>
      {(type === "text" || type === "email" || type === "number") && (
        <input {...register} type={type} placeholder={placeholder} />
      )}
      {type === "password" && (
        <input {...register} type="password" placeholder={placeholder} />
      )}
      {type === "file" && <input {...register} type="file" />}
    </>
  );
};

export default Input;
