import cls from "@utils/cls";

interface IErrorMessage {
  text: string | undefined;
  className?: string;
}

const ErrorMessage = ({ text, className }: IErrorMessage) => {
  return (
    <span className={cls("mt-1 text-sm text-red-500", className ?? "")}>
      {text}
    </span>
  );
};

export default ErrorMessage;
