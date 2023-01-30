import getIcon from "@utils/getIcon";
import GroupSvg from "@assets/svg/GroupSvg.svg";
import ArrowSvg from "@assets/svg/ArrowSvg";

const StudiesSection = () => {
  // ArrowSvg 클릭 시에 내가 속한 그룹 정보들 조회
  return (
    <section className="grid grid-cols-2 rounded-[1rem] bg-bgColor-100 p-[1.3rem_3rem]">
      <div className="flex items-center space-x-[1.6rem]">
        <div className="flex-center h-[5.4rem] w-[5.4rem] rounded-[1.2rem] bg-[#94B7F7]">
          <img src={getIcon(17)} className="h-[4rem] w-[4rem]" alt="icon" />
        </div>
        <div className="flex flex-col justify-between py-[0.2rem]">
          <h3 className="Sub2">토익 900 달성 스터디</h3>
          <span className="Cap4 text-primary-500">
            #어학 #매일피드백 #700이상 #인증
          </span>
        </div>
      </div>
      <div className="flex items-center  space-x-[1rem] text-primary-500">
        <span className="Cap3 flex space-x-[0.6rem]">
          <img
            src={GroupSvg}
            className="mr-[0.6rem] h-[2rem] w-[2rem]"
            alt="icon"
          />
          4명 참여중
        </span>
        <span className="Cap3 space-x-[0.6rem text-primary-500] flex">
          <div className="mr-[0.6rem] h-[2rem] w-[2rem] bg-primary-500" />
          어학
        </span>
        <span className="flex flex-1 cursor-pointer justify-end text-primary-500">
          <ArrowSvg className="w-[2.2rem] rotate-[-90deg]" strokeWidth="2.4" />
        </span>
      </div>
    </section>
  );
};

export default StudiesSection;
