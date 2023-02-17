import Layout from "@components/layout/Layout";
import BestTag from "@components/main/BestTag";
import BestStudy from "@components/main/BestStudy";
import CategoryBtn from "@components/main/CategoryBtn";
import NewStudy from "@components/main/NewStudy";
import Pomodoro from "@components/main/Pomodoro";
import Studing from "@components/main/Studing";
import StudyCheck from "@components/main/StudyCheck";
import { useEffect, useState } from "react";
import StudyApi from "@apis/query/studyApi";
import { useNavigate } from "react-router-dom";
import { isExistToken } from "@utils/isLogin";

const Home = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState("DEV");
  const { data } = StudyApi.CateBestStudy(click);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(isExistToken());
  }, []);

  return (
    <Layout>
      <div className="flex">
        <CategoryBtn setClick={setClick} click={click} />
        <div className="ml-[2.6rem]">
          <BestStudy data={data} />
          <NewStudy />
        </div>
        <div className="ml-[5.2rem]">
          {isLogin && (
            <div className="mb-[7.2rem] mt-[5.4rem]">
              <div className="flex justify-between">
                <h2 className="H2 mb-[1.8rem] text-primary-600">
                  참여 중인 스터디 그룹
                </h2>
                <button
                  onClick={() => navigate("/mypage")}
                  className="Cap1 text-primary-500"
                >
                  더보기
                </button>
              </div>
              <Studing />
              <StudyCheck />
            </div>
          )}
          <BestTag now="main" />
          <Pomodoro />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
