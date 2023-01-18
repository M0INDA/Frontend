import cls from "@utils/cls";
import type { UseFormRegisterReturn } from "react-hook-form";

type OnClick = {
  (e: React.MouseEvent<HTMLElement>): void;
};

interface IInputWithButton {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  label?: string;
  buttonText?: string;
  onClick?: OnClick;
  className?: string;
}

const styles = {
  login:
    "h-[58px] rounded border border-primary-200 placeholder:font-sans  placeholder:font-light placeholder:text-primary-400 focus:border-primary-main focus:outline-none focus:ring-transparent ",
  loginBtn: "w-[108px] rounded bg-primary-300 p-[17px]  text-primary-500",
};

const InputWithButton = ({
  type,
  placeholder,
  register,
  label,
  buttonText,
  onClick,
  className,
}: IInputWithButton) => {
  return (
    <>
      {(type === "email" || type === "text" || type === "number") && (
        <>
          {label ? (
            <label>
              <span>{label}</span>
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
            </label>
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
    </>
  );
};

export default InputWithButton;
