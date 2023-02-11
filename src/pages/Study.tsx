import Layout from "@components/layout/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cls from "@utils/cls";
import StudyRecommend from "@components/StudyInformation/StudyRecommend";
import StudyLatest from "@components/StudyInformation/StudyLatest";
import Icon1 from "@assets/icons/Icon1.svg";
import Pomodoro from "@components/main/Pomodoro";
import BestTag from "@components/main/BestTag";

const Study = () => {
  const categorys = [
    "전체 분야",
    "어학",
    "취업 준비",
    "취미, 교양",
    "고시, 공무원",
    "기타",
  ];
  const [click, setClick] = useState("전체 분야");
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex">
        <div className="mt-[13.4rem]">
          {categorys.map((cate) => (
            <div
              key={cate}
              onClick={() => setClick(cate)}
              className={cls(
                "H3 h-[5.4rem] w-[21rem] cursor-pointer py-[1.4rem] px-[3.6rem]",
                cate === click
                  ? "rounded-full bg-primary-500 text-primary-100"
                  : " text-primary-600"
              )}
            >
              {cate}
            </div>
          ))}
        </div>

        <div className="flex flex-col">
            <StudyRecommend />
          <div className="flex">
            <StudyLatest />
            <div className="mt-[7rem] ml-[-7rem] flex">
              <div className="ml-[10.4rem] mt-[1.8rem] h-[27.6rem] w-[32.8rem] rounded-[1.4rem] bg-[#F7F7F7]">
                <p className="Cap4 mt-[2.8rem] ml-[3rem] text-primary-500">
                  스터디 시작일 | 2023.01.11
                </p>
                <p className="H2 mt-[2.2rem] ml-[3rem] leading-[2.6rem]">모집글 제목</p>
                <p className="Cap1 mt-[0.4rem] ml-[3rem] text-primary-500 leading-[2.2rem]">
                  부가 텍스트 및 스터디명
                </p>
                <img
                  src={Icon1}
                  alt="studyIcon"
                  className="mt-[3.4rem] ml-[3rem] h-[5.8rem] w-[5.8rem] leading-[7rem]"
                />

                <div className="Cap4 mt-[1.6rem] ml-[3rem] flex justify-between text-primary-main leading-[1.8rem]">
                  <span>IDhere</span>
                  <div>
                    <span>조회</span>
                    <span className="ml-[1.4rem] mr-[2.2rem]">댓글</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[14.3rem] flex-col">
          <Pomodoro />
          <BestTag />
        </div>
      </div>
    </Layout>
  );
};

export default Study;
