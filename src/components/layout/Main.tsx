interface IMain {
  children: JSX.Element[] | JSX.Element;
}

const Main = ({ children }: IMain) => {
  return (
    <main className="mx-auto w-full px-[3rem] xl:w-[144rem] xl:px-0">
      {children}
    </main>
  );
};

export default Main;
