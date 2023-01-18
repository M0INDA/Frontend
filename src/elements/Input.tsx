import cls from "@utils/cls";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  label?: string;
  buttonText?: string;
  onClick?: OnClick;
}

type OnClick = {
  (e: React.MouseEvent<HTMLElement>): void;
};

const inputStyles = {
  login:
    "h-[58px] rounded border border-primary-200 placeholder:font-sans placeholder:font-normal placeholder:text-primary-400 focus:border-primary-main focus:outline-none focus:ring-transparent ",
};

const Input = ({
  type,
  placeholder,
  register,
  label,
  buttonText,
  onClick,
}: IInput) => {
  return (
    <>
      {(type === "text" || type === "email" || type === "number") && (
        <label className="flex flex-col">
          {label && (
            <>
              <span className="mb-[10px]  text-[14px] text-primary-500">
                {label}
              </span>
              {!buttonText ? (
                <input
                  {...register}
                  type={type}
                  placeholder={placeholder}
                  className={inputStyles.login}
                />
              ) : (
                <div className="flex ">
                  <input
                    {...register}
                    type={type}
                    placeholder={placeholder}
                    className={cls(inputStyles.login, "flex-1")}
                  />
                  <button onClick={onClick}>{buttonText}</button>
                </div>
              )}
            </>
          )}
        </label>
      )}
      {type === "password" && (
        <>
          {label && (
            <label className="mb-[10px]  text-[14px] text-primary-500">
              {label}
            </label>
          )}
          <input
            {...register}
            type="password"
            placeholder={placeholder}
            className={inputStyles.login}
          />
        </>
      )}
      {type === "file" && <input {...register} type="file" />}
    </>
  );
};

export default Input;
