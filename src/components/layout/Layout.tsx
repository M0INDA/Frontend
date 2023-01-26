import cls from "@utils/cls";
import Header from "./Header";
import Main from "./Main";

interface ILayout {
  children: JSX.Element[] | JSX.Element;
  hasBgColor?: boolean;
}

const Layout = ({ children, hasBgColor }: ILayout) => {
  return (
    <div
      className={cls(
        "min-w-max",
        hasBgColor ? "bg-bgColor-200" : "bg-bgColor-100"
      )}
    >
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
