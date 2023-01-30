import cls from "@utils/cls";

interface IMain {
  children: JSX.Element[] | JSX.Element;
  isFullHeight?: boolean;
}

const Main = ({ children, isFullHeight }: IMain) => {
  return (
    <main
      className={cls(
        "body-height mx-auto w-full px-[3rem] lg:w-[144rem] lg:px-0",
        isFullHeight && "flex flex-col"
      )}
    >
      {children}
    </main>
  );
};

export default Main;
