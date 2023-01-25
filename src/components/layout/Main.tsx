import cls from "@utils/cls";

interface IMain {
  children: JSX.Element[] | JSX.Element;
}

const Main = ({ children }: IMain) => {
  return (
    <main
      className={cls(
        "body-height mx-auto w-full px-[3rem] lg:w-[144rem] lg:px-0"
      )}
    >
      {children}
    </main>
  );
};

export default Main;
