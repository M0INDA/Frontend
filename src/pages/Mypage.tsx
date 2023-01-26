import Layout from "@components/layout/Layout";
import StudyCheck from "@components/main/StudyCheck";
import LogoutBtn from "@components/profile/LogoutBtn";
import Mystudy from "@components/profile/Mystudy";
import Profile from "@components/profile/Profile";
import Status from "@components/profile/Status";
import StudyBar from "@components/profile/StudyBar";
import StudyEnd from "@components/profile/StudyEnd";
import StudyLog from "@components/profile/StudyLog";

const Mypage = () => {
  return (
    <Layout hasBgColor={true}>
      <div className="mt-[5rem] flex">
        <div className="">
          <Profile />
          <StudyCheck />
          <Status />
          <LogoutBtn />
        </div>
        <div className="ml-[2.7rem]">
          <StudyBar />
          <div className="mt-[3.2rem] flex">
            <div>
              <Mystudy />
              <StudyEnd />
            </div>
            <StudyLog />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mypage;
