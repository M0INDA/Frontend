import React from "react";
import Icon16 from "@assets/icons/Icon16.svg";

const StudyRecommend = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <header className="H1 ml-[10.4rem] mt-[5rem] leading-[2.8rem]">취업준비 스터디</header>
        <h2 className="H2 ml-[10.4rem] mt-[4rem] leading-[2.2rem]">추천 스터디 그룹</h2>
        <div className="ml-[10.4rem] mt-[1rem] h-[27.6rem] w-[32.8rem] rounded-[1.4rem] bg-primary-sub3">
          <p className="Cap4 mt-[2.8rem] ml-[3rem] text-primary-500 leading-[2.2rem]">
            스터디 시작일 &nbsp; | &nbsp; 2023.01.11
          </p>
          <p className="H2 mt-[2.2rem] ml-[3rem] leading-[2.6rem]">모집글 제목</p>
          <p className="Cap1 mt-[0.2rem] ml-[3rem] text-primary-500 leading-[2.2rem]">
            부가 텍스트 및 스터디명
          </p>
          <img
            src={Icon16}
            alt="studyIcon"
            className="mt-[3.4rem] ml-[3rem] h-[5.8rem] w-[5.8rem] leading-[7rem] "
          />
          <div className="Cap4 mt-[2rem] ml-[3rem] flex justify-between text-primary-main">
            <span className='leading-[1.8rem]'>IDhere</span>
            <div className='leading-[1.8rem]'>
              <span>조회</span>
              <span className="ml-[1.4rem] mr-[3rem]">댓글</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyRecommend;
