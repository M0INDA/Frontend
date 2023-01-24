import Layout from "@components/layout/Layout";
import BestTag from "@components/main/BestTag";
import BestStudy from "@components/main/BestStudy";
import CategoryBtn from "@components/main/CategoryBtn";
import NewStudy from "@components/main/NewStudy";
import Pomodoro from "@components/main/Pomodoro";
import Studing from "@components/main/Studing";
import StudyCheck from "@components/main/StudyCheck";

const Home = () => {
  const colors = [
    ["#FFA07D", "#FFE7D6"],
    "#94B7F7",
    "#F5BEBE",
    "#F7D594",
    "#B0F47B",
  ];
  return (
    <Layout>
      <div className="flex">
        <CategoryBtn />
        <div className="ml-[2.6rem]">
          <BestStudy />
          <NewStudy />
        </div>
        <div className=" ml-[5.2rem]">
          <Studing />
          <StudyCheck />
          <BestTag />
          <Pomodoro />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
