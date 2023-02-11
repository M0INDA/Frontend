import React, { useState } from "react";
import Layout from "@components/layout/Layout";
import cls from "@utils/cls";
import { useNavigate } from "react-router-dom";
import Timer from "@components/timer/Timer";
import Icon16 from "@assets/icons/Icon16.svg";

const DetailStudy = () => {
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
      <main className="flex">
        {/** 카테고리 버튼 */}
        <div className="mt-[5rem]">
          {categorys.map((cate) => (
            <div
              key={cate}
              onClick={() => setClick(cate)}
              className={cls(
                "H3 h-[5.7rem] w-[21rem] cursor-pointer py-[1.4rem] px-[3.6rem]",
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
          <div className="ml-[2.4rem] mt-[5rem] flex h-[8.8rem] w-[8.8rem] cursor-pointer items-center justify-center rounded-[0.8rem] bg-[#F7F6F6] text-primary-400">
            <img
              src={Icon16}
              alt="studyIcon"
              className="h-[6.8rem] w-[6.8rem] leading-[8.2rem]"
            />
          </div>

          {/** 모집글 제목 */}
          <header className="H3 ml-[2.6rem] mt-[2.4rem] flex flex-row leading-[2.6rem]">
            오전 9시 출석! 취업을 위한 열공 스터디 원을 모집합니다.
            <button
              className="Cap4 ml-[1.6rem] leading-[2.2rem] text-primary-500"
              onClick={() => navigate("/editStudy")}
            >
              게시글 수정
            </button>
          </header>

          {/** 프로필, 닉네임, 해시태그 */}
          <section className="mt-[1.5rem] flex flex-col">
            <div className="ml-[2.6rem] flex h-[4.3rem] w-[4.3rem] items-center justify-center rounded-full bg-[#ABABAB] leading-[2.2rem]">
              닉넴
            </div>
            <div className="Cap4 ml-[7.9rem] mt-[-4.3rem] leading-[2.2rem]">
              닉네임
            </div>
            <div className="Cap4 ml-[7.9rem] leading-[2.2rem] text-[#848484]">
              #취업 #출석체크 #주5회출석
            </div>
          </section>

          {/** 스터디 정보 */}
          <section className='flex gap-[19rem]'>
            <div className="ml-[2.6rem] mt-[3.8rem] flex flex-col">
              <div className="flex">
                <div className="Sub2 leading-[2.4rem]">스터디팀 이름</div>
                <div className="Cap2 ml-[2.2rem] h-[2.6rem] rounded-[0.4rem] bg-primary-sub2 px-[0.8rem] py-[0.2rem] leading-[2.2rem]">
                  2023 취뽀 스터디
                </div>
              </div>
              <div className="mt-[1.4rem] flex">
                <div className="Sub2 leading-[2.4rem]">스터디 분야</div>
                <div className="Cap2 ml-[3.6rem] h-[2.6rem] rounded-[0.4rem] bg-primary-sub2 px-[0.8rem] py-[0.2rem] leading-[2.2rem]">
                  취업준비
                </div>
              </div>
            </div>

            <div className="ml-[2.6rem] mt-[3.8em] flex flex-col">
              <div className="flex">
                <div className="Sub2 leading-[2.4rem]">스터디 시작일</div>
                <div className="Cap2 ml-[2.2rem] h-[2.6rem] rounded-[0.4rem] bg-primary-sub2 px-[0.8rem] py-[0.2rem] leading-[2.2rem]">
                  2022 / 02 / 10
                </div>
              </div>
              <div className="flex mt-[1.4rem]">
                <div className="Sub2 leading-[2.4rem]">
                  연락수단
                </div>
                <div className="Cap2 ml-[5.6rem] h-[2.6rem] rounded-[0.4rem] bg-primary-sub2 px-[0.8rem] py-[0.2rem] leading-[2.2rem]">
                  링크만 클릭시 연결 되도록
                </div>
              </div>
            </div>
          </section>

          {/** 스터디 소개 */}
          <textarea
            className="Sub2 textColor ml-[2.6rem] mt-[4rem] h-[53.8rem] w-[80rem] resize-none rounded-[1rem] border-none bg-primary-250 px-[2.2rem] py-[2.2rem] leading-[2.6rem] focus:ring-0"
            placeholder="1. 프로젝트의 소개
          포트폴리오용 프로젝트를 같이 진행하실 팀원 분들을 모집합니다!
          안녕하세요, 저희는 취업 포트폴리오 용도의 사이드 프로젝트를 진행하고 있습니다.
          현재 백엔드 개발자 3명, 디자이너 2명으로 구성되어 있으며,
          React Native 개발자 2분을 추가로 모집하고자 합니다.
          
          🌐 프로젝트 설명
          목적지 및 날짜 별 여행 계획을 등록하고, 전체 루트를 한 눈에 볼 수 있는 여행 플래너 애플리케이션 개발
          1) 프로젝트 시작 배경
          
          2) 프로젝트 진행
          
          현재 애플리케이션 기능 설계 및 기능 정의서, Flow Chart 작성을 완료하였으며, 디자인 작업을 진행 중입니다.
          2023년 1~3월 동안 개발 완료 후 앱 출시를 목표로 하고 있으며, 진행 상황에 따라 프로젝트 진행 기간은 연장될 수 있습니다
          
          함께 프로젝트를 진행하고 싶으신 분은 아래의 구글 폼을 작성 및 제출해주시면 개별 연락 드리겠습니다 :)
          https://fokeXeN1EYNr7"
          />

          {/** 작성일 */}
          <div className="Cap4 absolute mt-[88rem] ml-[70rem] leading-[2.2rem] text-primary-500">
            2023.1.26 작성
          </div>

          {/** Join */}
          <button className="Sub2 mt-[3.4rem] ml-[2.6rem] flex h-[6.4rem] w-[79.6rem] items-center justify-center rounded-[3.5rem] bg-primary-main px-[] py-[2rem] leading-[2.4rem] text-primary-100">
            스터디 가입하기
          </button>
        </div>

        {/** 뽀모도로, 인기 태그 */}
        <aside className="ml-[2.7rem] flex flex-col">
          <div className="mt-[5rem] flex flex-col">
            <h2 className="H2 mb-[1.8rem] text-primary-600">뽀모도로</h2>
            <div className="relative h-[21.8rem] w-[44.6rem] rounded-[1rem] bg-primary-sub3">
              <Timer />
            </div>
          </div>
          <div className="mt-[7.2rem]">
            <h2 className="H2 mb-[1.8rem] text-primary-600">
              오늘의 인기 태그
            </h2>
            <div className="mt-[1.8rem]">
              <div className="Cap2 w-fit rounded-[5rem] border border-solid border-primary-200 py-[0.8rem] px-[1.6rem] text-primary-600">
                인기태그
              </div>
            </div>
          </div>
        </aside>
      </main>
    </Layout>
  );
};

export default DetailStudy;
