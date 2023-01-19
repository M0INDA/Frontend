interface IMain {
  children: JSX.Element[] | JSX.Element;
}

const Main = ({ children }: IMain) => {
  return <main className="px-[13vw]">{children}</main>;
};

export default Main;
