import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import StudyEndCard from "./StudyEndCard";

const StudyEnd = () => {
  return (
    <div className="mt-[2.6rem] h-[35.8rem] w-[56.4rem] rounded-[1rem] bg-white p-[3rem]">
      <p className="H2 mb-[2.4rem] text-primary-600">완료한 스터디</p>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <StudyEndCard />
          <StudyEndCard />
        </SwiperSlide>
        <SwiperSlide>
          <StudyEndCard />
          <StudyEndCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StudyEnd;
