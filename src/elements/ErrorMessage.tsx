import cls from "@utils/cls";

interface IErrorMessage {
  text: string | undefined;
  className?: string;
}

const ErrorMessage = ({ text, className }: IErrorMessage) => {
  return (
    <>
      {text && (
        <span
          className={cls(
            "mt-[0.4rem] text-[1.2rem] text-red-500",
            className ?? ""
          )}
        >
          {text}
        </span>
      )}
    </>
  );
};

export default ErrorMessage;
