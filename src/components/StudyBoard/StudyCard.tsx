import Icon6 from "@assets/icons/Icon6.svg";

const StudyCard = () => {
  return (
    <div className="h-[27.6rem] w-[32.8rem] rounded-[1.4rem] bg-[#F4F4F4] px-[3rem] pt-[2.8rem]">
      <p className="Cap4 text-primary-500">
        스터디 시작일 &nbsp; | &nbsp; 2023.23.23
      </p>
      <p className="H3 mt-[2.2rem]">모집글 제목 들어가는 곳</p>
      <p className="Cap1 text-primary-500">부가텍스트 및 스터디명 적는 곳</p>
      <img
        src={Icon6}
        alt="studyIcon"
        className="mt-[3.4rem] h-[5.8rem] w-[5.8rem]"
      />
      <div className="Cap4 mt-[2rem] flex justify-between text-primary-main">
        <span>IDhere</span>
        <div>
          <span>조회</span>
          <span className="ml-[1.4rem]">댓글</span>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
