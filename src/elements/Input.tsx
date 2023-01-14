import type { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

const Input = ({ type, placeholder, register }: IInput) => {
  return (
    <>
      {type === "text" && (
        <input {...register} type="text" placeholder={placeholder} />
      )}
      {type === "password" && (
        <input {...register} type="password" placeholder={placeholder} />
      )}
      {type === "number" && (
        <input {...register} type="number" placeholder={placeholder} />
      )}
      {type === "file" && <input {...register} type="file" />}
    </>
  );
};

export default Input;
