import Header from "./Header";

interface ILayout {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
