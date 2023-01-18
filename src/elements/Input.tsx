import cls from "@utils/cls";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  label?: string;
  buttonText?: string;
  onClick?: OnClick;
  className?: string;
}

type OnClick = {
  (e: React.MouseEvent<HTMLElement>): void;
};

const styles = {
  login:
    "h-[58px] rounded border border-primary-200 placeholder:font-sans  placeholder:font-light placeholder:text-primary-400 focus:border-primary-main focus:outline-none focus:ring-transparent ",
  loginBtn: "w-[108px] rounded bg-primary-300 p-[17px]  text-primary-500",
};

const Input = ({
  type,
  placeholder,
  register,
  label,
  buttonText,
  onClick,
  className,
}: IInput) => {
  return (
    <>
      {(type === "text" || type === "email") && (
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
                  className={cls(styles.login)}
                />
              ) : (
                <div className="flex space-x-[10px]">
                  <input
                    {...register}
                    type={type}
                    placeholder={placeholder}
                    className={cls(styles.login, "flex-1 ")}
                  />
                  <button className={styles.loginBtn} onClick={onClick}>
                    {buttonText}
                  </button>
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
            className={cls(styles.login)}
          />
        </>
      )}
      {type === "number" && (
        <>
          {!buttonText ? (
            <input
              {...register}
              type="password"
              placeholder={placeholder}
              className={styles.login}
            />
          ) : (
            <div
              className={cls("flex space-x-[10px]", className ? className : "")}
            >
              <input
                {...register}
                type={type}
                placeholder={placeholder}
                className={cls(styles.login, "flex-1")}
              />
              <button className={cls(styles.loginBtn)} onClick={onClick}>
                {buttonText}
              </button>
            </div>
          )}
        </>
      )}
      {type === "file" && <input {...register} type="file" />}
    </>
  );
};

export default Input;
