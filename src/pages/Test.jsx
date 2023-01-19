import ArrowSvg from "@assets/svg/ArrowSvg";
import { Outlet, useNavigate } from "react-router-dom";
const Test = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full  items-center justify-center bg-[#F6F6F6] sm:max-h-full sm:min-h-screen ">
      <div className=" flex h-screen  w-full flex-col overflow-scroll  bg-primary-100 scrollbar-hide sm:max-h-[90vh]  sm:max-w-[412px] sm:border sm:border-primary-400">
        <header className="relative flex items-center py-[14px]">
          <span className="z-[1] pl-[22px]" onClick={() => navigate(-1)}>
            <ArrowSvg className="aspect-square w-[24px] cursor-pointer hover:text-primary-500" />
          </span>
          <h1 className="absolute w-full text-center text-[20px] font-medium text-primary-main">
            MOINDA
          </h1>
        </header>
        <main className="relative flex flex-col p-[22px] pt-[0px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Test;
