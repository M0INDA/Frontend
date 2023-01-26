import Layout from "@components/layout/Layout";
import Studing from "@components/main/Studing";
import LogoutBtn from "@components/profile/LogoutBtn";
import Profile from "@components/profile/Profile";
import Status from "@components/profile/Status";
import StudyBar from "@components/profile/StudyBar";
import StudyEnd from "@components/profile/StudyEnd";
import StudyLog from "@components/profile/StudyLog";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import NoStudy from "@components/profile/NoStudy";

const Mypage = () => {
  return (
    <div className="bg-[#F5F4F3]">
      <Layout>
        <div className="mt-[5rem] flex">
          <div className="">
            <Profile />
            <Status />
            <LogoutBtn />
          </div>
          <div className="ml-[2.7rem]">
            <StudyBar />
            <div className="mt-[3.2rem] flex">
              <div>
                <div className="h-[58.4rem] w-[56.4rem] rounded-[1rem] bg-white p-[3rem]">
                  <h2 className="H2 mb-[1.8rem] text-primary-600">
                    참여 중인 스터디그룹
                  </h2>
                  <Swiper
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="h-[38.6rem] w-[50.4rem] bg-red-300"
                  >
                    <SwiperSlide>
                      <Studing now="mypage" />
                      <Studing now="mypage" />
                      <Studing now="mypage" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <NoStudy />
                    </SwiperSlide>
                  </Swiper>
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
