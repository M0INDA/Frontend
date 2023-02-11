import React from "react";
import Icon2 from "@assets/icons/Icon2.svg";

const StudyLatest = () => {
  return (
    <div className="flex ">
      <div className="flex flex-col">
        <header className="H2 ml-[10.4rem] mt-[4rem]">최신 스터디 모집글</header>
        <div className="ml-[10.4rem] mt-[1.8rem] h-[27.6rem] w-[32.8rem] rounded-[1.4rem] bg-[#F7F7F7]">
          <p className="Cap4 mt-[2.8rem] ml-[3rem] text-primary-500">
            스터디 시작일&nbsp; | &nbsp; 2023.01.11
          </p>
          <div className="H2 mt-[2.2rem] ml-[3rem] h-[5.2rem] leading-[2.6rem]">
            <p>
              모집글 제목 2줄일 경우
              <br />이렇게 들어갑니다
            </p>
          </div>
          <p className="Cap1 mt-[0.4rem] ml-[3rem] h-[2.2rem] w-[26.9rem] leading-[2.2rem] text-primary-500">
            부가 텍스트 및 스터디명
          </p>
          <img
            src={Icon2}
            alt="studyIcon"
            className="mt-[1.2rem] ml-[3rem] h-[5.8rem] w-[5.8rem] leading-[7rem]"
          />
          <div className="Cap4 mt-[1.6rem] ml-[3rem] mb-[2.2rem] flex justify-between text-primary-main leading-[1.8rem]">
            <span>IDhere</span>
            <div>
              <span>조회</span>
              <span className="ml-[1.4rem] mr-[2.2rem]">댓글</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyLatest;
