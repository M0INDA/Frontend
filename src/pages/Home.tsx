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
  const colors = [
    ["#FFA07D", "#FFE7D6"],
    "#94B7F7",
    "#F5BEBE",
    "#F7D594",
    "#B0F47B",
  ];
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
        <div className=" ml-[5.2rem]">
          <div>
            <h2 className="H2 mb-[1.8rem] mt-[5.4rem] text-primary-600">
              참여 중인 스터디그룹
            </h2>
            <Studing />
          </div>
          <StudyCheck />
          <BestTag />
          <Pomodoro />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
