import ArrowDownSvg from "@assets/svg/ArrowDownSvg.svg";

const StudyBar = () => {
  return (
    <div className="h-[23.4rem] w-[91.7rem] rounded-[1rem] bg-white px-[3rem] pt-[3rem] text-primary-600">
      <div className="flex justify-between">
        <span className="H2 ">내 스터디 시간</span>
        <button className="Cap3 flex text-primary-500">
          목표 시간 설정
          <img
            src={ArrowDownSvg}
            alt="checkCon"
            className="ml-[0.4rem] h-[1.8rem] w-[1.8rem]"
          />
        </button>
      </div>
      <div className="mt-[2.6rem] ml-[2.2rem] flex">
        <div className=" border-l-[0.1rem] border-primary-200 px-[1.6rem]">
          <p className="Cap1">오늘 공부한 시간</p>
          <p className=" mt-[0.9rem] ml-[0.3rem] text-[2rem] font-medium">
            2h 42m
          </p>
        </div>
        <div className="border-l-[0.1rem] border-primary-200 px-[1.6rem]">
          <p className="Cap1">목표시간</p>
          <p className="mt-[0.9rem] ml-[0.3rem] text-[2rem] font-medium">
            8h 30m
          </p>
        </div>
      </div>
      <div className="absolute z-20 mt-[2rem] ml-[2.2rem] h-[1.8rem] w-[8.2rem] rounded-[2.1rem] bg-gradient-to-r from-primary-sub1 to-primary-main" />
      <div className="relative  mt-[2rem] ml-[2.2rem] h-[1.8rem] w-[81.2rem] rounded-[2.1rem] bg-primary-200" />
    </div>
  );
};

export default StudyBar;
