import Layout from "@components/layout/Layout";
import Studing from "@components/main/Studing";
import StudyCheck from "@components/main/StudyCheck";
import LogoutBtn from "@components/profile/LogoutBtn";
import Profile from "@components/profile/Profile";
import Status from "@components/profile/Status";
import StudyBar from "@components/profile/StudyBar";
import StudyEnd from "@components/profile/StudyEnd";
import StudyLog from "@components/profile/StudyLog";

const Mypage = () => {
  return (
    <div className="bg-[#F5F4F3]">
      <Layout>
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
                <div className="h-[58.4rem] w-[56.4rem] rounded-[1rem] bg-white p-[3rem]">
                  <Studing now="mypage" />
                </div>
                <StudyEnd />
              </div>
              <StudyLog />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Mypage;
