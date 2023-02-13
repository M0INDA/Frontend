import ArrowSvg from "@assets/svg/ArrowSvg";
import { iconBackgrounds } from "@utils/getIcon";

interface ILineProgress {
  onClick?: () => void;
}

const LineProgressBar = ({ onClick }: ILineProgress) => {
  return (
    <div className="flex flex-col  rounded-[1rem] bg-white p-[3rem] text-primary-600">
      <div className="mb-[2.8rem] flex items-center justify-between">
        <span className="H2 ">내 그룹 목표 달성률</span>
        <button
          className="Cap3 flex items-center text-primary-500"
          onClick={onClick}
        >
          목표 시간 설정
          <span className="ml-[0.4rem] flex flex-1 cursor-pointer justify-end text-primary-500">
            <ArrowSvg className="w-[1.8rem] rotate-[-90deg]" />
          </span>
        </button>
      </div>
      <div className="mb-[1.2rem] flex">
        <div className="border-l  border-primary-200 p-[0.2rem_1.6rem]">
          <p className="Cap1">오늘 공부한 시간</p>
          <p className="H3 mt-[0.9rem] ml-[0.3rem]">2h 42m</p>
        </div>
        <div className="border-l  border-primary-200 p-[0.2rem_1.6rem]">
          <p className="Cap1">그룹 목표시간</p>
          <p className="H3 mt-[0.9rem] ml-[0.3rem]">8h 30m</p>
        </div>
        <div className="flex w-full flex-1 items-end justify-end ">
          <p className="Cap1">
            <b className="mr-[0.4rem] text-[2rem] font-medium">75%</b>달성중
          </p>
        </div>
      </div>

      <div className="relative   h-[2rem]  rounded-[2.1rem] bg-primary-200">
        <div
          className={`absolute left-0 top-0 h-[2rem] w-3/4 rounded-[2.1rem] ${iconBackgrounds[1]}`}
        />
      </div>
    </div>
  );
};

export default LineProgressBar;
