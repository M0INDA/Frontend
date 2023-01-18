import ArrowSvg from "@assets/svg/ArrowSvg";
import { Outlet, useNavigate } from "react-router-dom";
const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full items-center justify-center bg-[#F6F6F6] sm:h-screen">
      <div className="flex h-full w-full flex-col bg-primary-100 sm:max-h-[892px] sm:max-w-[412px] ">
        <header className="relative flex h-[60px] items-center ">
          <span className="z-[1] pl-[22px]" onClick={() => navigate(-1)}>
            <ArrowSvg className="w-[25px] cursor-pointer hover:text-primary-500" />
          </span>
          <h1 className="absolute w-full text-center text-[20px] font-medium text-primary-main">
            MOINDA
          </h1>
        </header>
        <main className="flex flex-col p-[22px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Start;
