import Studing from "@components/main/Studing";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import NoStudy from "@components/profile/NoStudy";
import PlusSvg from "@assets/svg/PlusSvg.svg";

const Mystudy = () => {
  return (
    <div className="h-[100vh] max-h-[61.8rem] w-[100vh] max-w-[56.4rem] rounded-[1rem] bg-white p-[3rem]">
      <h2 className="H2 mb-[1.8rem] text-primary-600">참여 중인 스터디그룹</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Studing now="mypage" />
        </SwiperSlide>
        <SwiperSlide>
          <NoStudy />
        </SwiperSlide>
      </Swiper>
      <div className="flex-center mt-[2.4rem]">
        <button className="flex-center Cap4 h-[6.8rem] w-[36.5rem] rounded-[1rem] border border-dashed border-primary-350 text-primary-600">
          <img
            src={PlusSvg}
            alt="plusCon"
            className="mr-[0.8rem] h-[1.8rem] w-[1.8rem]"
          />
          스터디그룹 가입하기
        </button>
      </div>
    </div>
  );
};

export default Mystudy;
