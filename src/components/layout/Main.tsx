interface IMain {
  children: JSX.Element[] | JSX.Element;
}

const Main = ({ children }: IMain) => {
  return <main>{children}</main>;
};

export default Main;
