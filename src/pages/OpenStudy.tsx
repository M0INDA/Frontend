import Layout from "@components/layout/Layout";
import React, { useState } from "react";
import cls from '@utils/cls';

const OpenStudy = () => {
  const [iscategoryActivate, setIsCategoryActivate] = useState(false);
  const CategoryHandler = () => {
    setIsCategoryActivate((cur)=>!cur);
  }

  return (
    <Layout>
      <div className="flex">
        <div className="flex-col">
          <div className="H2 ml-[23.1rem] mt-[5rem] h-[2.6rem] w-[12rem] leading-[2.6rem] text-primary-700">
            스터디 모집하기
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[3.3rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            대표 아이콘
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[8.6rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            모집글 제목
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[9.2rem] leading-[2.4rem] text-primary-600">
            스터디팀 이름
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            스터디 분야
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            스터디 내용
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[15.6rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            해시태그
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[9.2rem] leading-[2.4rem] text-primary-600">
            스터디 시작일
          </div>
        </div>
        <div className="flex flex-col">
          <form>
            <button className="ml-[15.8rem] mt-[10.7rem] flex h-[8.8rem] w-[8.8rem] flex-[1] rounded-[0.8rem] bg-primary-300">
              <div className="flex flex-row items-center justify-center text-primary-100">
                아이콘 설정
              </div>
            </button>
            <input
              className="Sub2 border-[0.11rem bg-primary-200] ml-[15.8rem] mt-[2.4rem] mr-[50.1rem] h-[5.2rem] w-[68.2rem] rounded-[0.8rem] bg-[#F9F7F6] px-[1.8rem] py-[1.4rem] text-primary-400 opacity-[0.55]"
              placeholder="오전 9시 출석! 취업을 위한 열공 스터디를 모집합니다"
            ></input>
            <input
              className="Sub2 ml-[15.8rem] mt-[2.4rem] mr-[50.1rem] h-[5.2rem] w-[68.2rem] rounded-[0.8rem] border-[0.11rem_primary-200] bg-[#F9F7F6] px-[1.8rem] py-[1.4rem] text-primary-400 opacity-[0.55]"
              placeholder="2023 취뽀 스터디"
            ></input>
            <div className="Sub2 mt-[2.4rem] flex flex-row gap-[0.5rem] text-primary-500">
              <button
                className="ml-[15.8rem] h-[5.2rem] w-[10.2rem] flex-row items-center rounded-[4.8rem] border-primary-200 border-[0.1rem_#E1E1E1] bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]">
                어학
              </button>
              <button className="h-[5.2rem] w-[13.1rem] flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]">
                취업준비
              </button>
              <button className="h-[5.2rem] w-[13.8rem] flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]">
                취미,교양
              </button>
              <button className="h-[5.2rem] w-[15.3rem] flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]">
                고시, 공무원
              </button>
              <button className="h-[5.2rem] w-[10.2rem] flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]">
                기타
              </button>
            </div>
            <textarea
              className="Sub2 ml-[15.8rem] mr-[50.1rem] mt-[2.4rem] h-[15.6rem] w-[68.2rem] resize-none rounded-[0.8rem] border-none bg-[#F9F7F6] pl-[1.8rem] pr-[2.9rem] pt-[1.4rem] text-primary-400 opacity-[0.55] focus:ring-0"
              placeholder="취업을 위한 열공 스터디를 모집합니다!"
            />
            <input
              className="Sub2 ml-[15.8rem] mr-[50.1rem] mt-[2.4rem] h-[5.2rem] w-[68.2rem] rounded-[0.8rem] bg-[#F9F7F6] py-[1.4rem] pl-[1.8rem] leading-[2.4rem] text-primary-400 opacity-[0.55]"
              placeholder="#취업  #"
            ></input>
            <input
              className="Sub2 border-[0.11rem bg-primary-200] ml-[15.8rem] mr-[50.1rem] mt-[2.4rem] h-[5.2rem] w-[68.2rem] rounded-[0.8rem] bg-[#F9F7F6] py-[1.4rem] pl-[1.8rem] leading-[2.4rem] text-primary-400 opacity-[0.55]"
              placeholder="2022 / 02 / 10"
            ></input>
            <button className="Sub2 mt-[6rem] ml-[15.8rem] mr-[73.6rem] mb-[14.1rem] h-[6.4rem] w-[44.7rem] flex-row items-center justify-center rounded-[3.5rem] bg-primary-main px-[17rem] py-[2rem] text-primary-100">
              스터디 모집하기
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default OpenStudy;
