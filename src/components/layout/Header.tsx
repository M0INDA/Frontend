import SearchSvg from "@assets/svg/SearchSvg";
import cls from "@utils/cls";
import { useLocation } from "react-router-dom";

const styles = {
  navItem:
    "h-[6rem] flex px-1 items-center mb-[-3px] border-b-[3px] border-orange-500 cursor-pointer",
  activeItem: "Sub1 border-primary-main ",
};

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex h-[6rem] w-full items-center justify-between px-[3rem] xl:w-[144rem] xl:px-0">
        <nav className="flex items-center space-x-[4.2rem]">
          <span className="H1 text-primary-main">MOINDA</span>
          <ul className="flex space-x-[3.6rem]">
            <li
              className={cls(
                styles.navItem,
                pathname === "/" ? styles.activeItem : "Sub2 border-transparent"
              )}
            >
              홈
            </li>
            <li
              className={cls(
                styles.navItem,
                pathname === "/profile"
                  ? styles.activeItem
                  : "Sub2 border-transparent"
              )}
            >
              마이페이지
            </li>
            <li
              className={cls(
                styles.navItem,
                pathname === "/ld"
                  ? styles.activeItem
                  : "Sub2 border-transparent"
              )}
            >
              스터디게시판
            </li>
            <li
              className={cls(
                styles.navItem,
                pathname === "/mz"
                  ? styles.activeItem
                  : "Sub2 border-transparent"
              )}
            >
              🥫뽀모도로
            </li>
          </ul>
        </nav>
        <div className="flex space-x-[4.9rem]">
          <form className="flex space-x-[2.2rem]">
            <label className="relative flex h-[4.2rem] w-[35.6rem] items-center">
              <SearchSvg className="absolute w-[1.8rem] translate-x-7 text-primary-500" />
              <input
                type="text"
                className="Cap1 h-full w-full rounded-full border-none bg-[#F6F6F6] pl-[4.8rem] placeholder:text-primary-500"
                placeholder="UX 디자이너 스터디"
              />
            </label>
            <button className="Cap2 flex h-[4.3rem] w-[12.8rem] items-center justify-center rounded-full bg-primary-500 text-primary-100">
              스터디 모집하기
            </button>
          </form>
          <div className="aspect-square w-[4.3rem] rounded-full bg-primary-200" />
        </div>
      </div>
    </header>
  );
};

export default Header;
