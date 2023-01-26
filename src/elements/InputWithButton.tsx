import cls from "@utils/cls";
import type { UseFormRegisterReturn } from "react-hook-form";

type OnClick = {
  (e: React.MouseEvent<HTMLElement>): void;
};
type InputClass = "startInput" | "disabledInput";
type BtnClass = "startBtn" | "activeStartBtn" | "codeBtn" | "disabledCodeBtn";

interface IInputWithButton {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  label?: string;
  buttonText?: string;
  onClick?: OnClick;
  inputClass?: InputClass;
  btnClass?: BtnClass;
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[] | boolean;
}

const styles = {
  startInput:
    "px-[1.3rem] text-primary-700 h-[5.8rem] text-[1.4rem] rounded border border-primary-200 placeholder:font-sans  placeholder:font-light placeholder:text-primary-400 focus:border-primary-main focus:outline-none focus:ring-transparent flex-1",
  disabledInput:
    "px-[1.3rem] h-[5.8rem] text-[1.4rem] rounded lex-1 bg-primary-200 flex flex-1 border-none text-primary-700",
  startBtn:
    "w-[10.8rem] text-[1.4rem] rounded h-[5.8rem] flex-center bg-primary-200 text-primary-500",
  activeStartBtn:
    "w-[10.8rem] text-[1.4rem] rounded h-[5.8rem] flex-center bg-primary-main text-primary-100",
  codeBtn:
    "absolute flex items-center h-[5.8rem] right-[1.7rem] text-primary-main text-[1.4rem]",
  disabledCodeBtn:
    "absolute flex items-center h-[5.8rem] right-[1.7rem] text-primary-500 text-[1.4rem]",
};

const InputWithButton = ({
  type,
  placeholder,
  register,
  buttonText,
  onClick,
  inputClass,
  btnClass,
  disabled,
  children,
}: IInputWithButton) => {
  return (
    <div className={cls("relative flex items-center space-x-[1rem]")}>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className={cls(inputClass ? styles[inputClass] : styles.startInput)}
        disabled={disabled}
      />
      <button
        className={cls(btnClass ? styles[btnClass] : styles.startBtn)}
        onClick={onClick}
        disabled={disabled}
      >
        {buttonText}
      </button>
      {children}
    </div>
  );
};

export default InputWithButton;
