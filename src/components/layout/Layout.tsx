import cls from "@utils/cls";
import Header from "./Header";
import Main from "./Main";

interface ILayout {
  children: JSX.Element[] | JSX.Element;
  hasBgColor?: boolean;
  isFullHeight?: boolean;
}

const Layout = ({ children, hasBgColor, isFullHeight }: ILayout) => {
  return (
    <div
      className={cls(
        "min-w-max pb-[6rem]",
        hasBgColor ? "bg-bgColor-200" : "bg-bgColor-100"
      )}
    >
      <Header />
      <Main isFullHeight={isFullHeight}>{children}</Main>
    </div>
  );
};

export default Layout;
