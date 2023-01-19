import Header from "./Header";
import Main from "./Main";

interface ILayout {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
