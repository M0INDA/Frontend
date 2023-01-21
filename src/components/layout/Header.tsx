import SearchSvg from "@assets/svg/SearchSvg";
import cls from "@utils/cls";
import { Children, useState } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header className="w-full border-b bg-white">
      <span className="h-10 w-10"></span>
      <div className="flex-between mx-auto h-[6rem]  w-full px-[3rem] lg:w-[144rem] lg:px-0">
        <nav className="flex items-center space-x-[4.2rem]">
          <span className="text-[2.4rem] font-bold text-primary-main ">
            MOINDA
          </span>
          <ul className="hidden md:flex md:space-x-[3.6rem]">
            {Children.toArray(
              navs.map((nav) => (
                <li
                  className={cls(
                    styles.navItem,
                    pathname === nav.pathname
                      ? styles.activeItem
                      : "Sub2 border-transparent"
                  )}
                >
                  {nav.name}
                </li>
              ))
            )}
          </ul>
        </nav>
        <div className="flex">
          <form className="flex">
            <label className="relative mr-[2.2rem] hidden h-[4.2rem] w-[35.6rem] items-center nm:flex">
              <SearchSvg className="absolute w-[1.8rem] translate-x-7 text-primary-500" />
              <input
                type="text"
                className="Cap1 h-full w-full rounded-full border-none bg-[#F6F6F6] pl-[4.8rem] placeholder:text-primary-500"
                placeholder="UX 디자이너 스터디"
              />
            </label>
          </form>
          {isLogin ? (
            <>
              <button className="Cap2 flex-center  mr-[4.9rem] h-[4.3rem] w-[12.8rem] rounded-full bg-primary-main text-primary-100">
                스터디 모집하기
              </button>
              <div className="aspect-square w-[4.3rem] rounded-full bg-primary-200" />
            </>
          ) : (
            <button className="Cap2 flex-center bg-primary-ㅡmain h-[4.3rem] w-[7rem] cursor-pointer rounded-full bg-primary-main text-primary-100">
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

const styles = {
  navItem:
    "h-[6rem] flex px-1 items-center mb-[-3px] border-b-[3px] cursor-pointer",
  activeItem: "Sub1 border-primary-main ",
};

const navs = [
  { id: 0, name: "홈", pathname: "/" },
  { id: 1, name: "마이페이지", pathname: "/profile" },
  { id: 2, name: "스터디 게시판", pathname: "/study" },
  { id: 3, name: "🥫뽀모도로", pathname: "/timer" },
];

// Children ! React.Children
