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
  inputClass?: string;
  btnClass?: string;
}

const styles = {
  start:
    "h-[5.8rem] text-[1.4rem] rounded border border-primary-200 placeholder:font-sans  placeholder:font-light placeholder:text-primary-400 focus:border-primary-main focus:outline-none focus:ring-transparent flex-1",
  startBtn:
    "w-[10.8rem] text-[1.4rem] rounded bg-primary-300 h-[5.8rem] flex-center  text-primary-500",
};

const InputWithButton = ({
  type,
  placeholder,
  register,
  buttonText,
  onClick,
  inputClass,
  btnClass,
}: IInputWithButton) => {
  return (
    <div className="flex space-x-[1rem]">
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className={cls(styles.start, inputClass ? inputClass : "")}
      />
      <button
        className={cls(styles.startBtn, btnClass ? btnClass : "")}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default InputWithButton;
