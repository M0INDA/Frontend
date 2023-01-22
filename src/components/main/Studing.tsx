import Icon1 from "@assets/icons/Icon1.svg";
import NextSvg from "@assets/svg/NextSvg.svg";

const Studing = () => {
  return (
    <div className="mt-[5.4rem] ">
      <h2 className="H2 mb-[1.8rem] text-primary-600">참여 중인 스터디그룹</h2>
      <div className="flex h-[11.8rem] w-[44.6rem] items-center rounded-[1.4rem] border border-solid border-primary-350 px-[1.6rem]">
        <div className="flex-center h-[5.4rem] w-[5.4rem] rounded-[1.2rem] bg-green-400">
          <img src={Icon1} alt="studyIcon" className="h-[4rem] w-[4rem]" />
        </div>
        <div className="ml-[1.5rem]">
          <p className="Sub2">토익 900 달성 스터디</p>
          <p className="Cap4 text-primary-500">#어학 #매일피드백 #700이상</p>
          <div className="Cap3 mt-[1.2rem] flex text-primary-500">
            <div className="flex-center">
              <div className="mr-[0.6rem] h-[2rem] w-[2rem] bg-primary-500" />
              <span>4명 참여중</span>
            </div>
            <div className="flex-center ml-9">
              <div className="mr-[0.6rem] h-[2rem] w-[2rem] bg-primary-500" />
              <span>어학</span>
            </div>
          </div>
        </div>
        <img
          src={NextSvg}
          alt="NextIcon"
          className="ml-auto h-[2.4rem] w-[2.4rem]"
        />
      </div>
    </div>
  );
};

export default Studing;
