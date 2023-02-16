import Layout from "@components/layout/Layout";
import BestTag from "@components/main/BestTag";
import BestStudy from "@components/main/BestStudy";
import CategoryBtn from "@components/main/CategoryBtn";
import NewStudy from "@components/main/NewStudy";
import Pomodoro from "@components/main/Pomodoro";
import Studing from "@components/main/Studing";
import StudyCheck from "@components/main/StudyCheck";
import { useState } from "react";
import StudyApi from "@apis/query/studyApi";

const Home = () => {
  const [click, setClick] = useState("DEV");
  const { data } = StudyApi.CateBestStudy(click);

  console.log(data);

  return (
    <Layout>
      <div className="flex">
        <CategoryBtn setClick={setClick} click={click} />
        <div className="ml-[2.6rem]">
          <BestStudy />
          <NewStudy />
        </div>
        <div className="ml-[5.2rem]">
          {/* 조건부 처리 하기 비로그인/로그인 */}
          <div className="mb-[7.2rem] mt-[5.4rem]">
            <div className="flex justify-between">
              <h2 className="H2 mb-[1.8rem] text-primary-600">
                새로 생긴 스터디그룹
              </h2>
              <button className="Cap1 text-primary-500">더보기</button>
            </div>
            <Studing />
            <StudyCheck />
          </div>
          <BestTag now="main" />
          <Pomodoro />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
