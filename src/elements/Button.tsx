import cls from "@utils/cls";

interface IButton {
  text: string;
  onClick?: () => void;
  textColor?: string;
  bgColor?: string;
  rounded?: string;
}

const Button = ({ text, onClick, textColor, bgColor, rounded }: IButton) => {
  return (
    <button
      className={cls(
        "Sub2 flex-center h-[6rem] w-full text-primary-700",
        textColor ? textColor : "text-primary-100",
        bgColor ? bgColor : "bg-pirmary-200",
        rounded ? rounded : "rounded-[1rem]"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
