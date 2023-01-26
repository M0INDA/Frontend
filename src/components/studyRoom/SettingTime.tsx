import { Swiper, SwiperSlide } from "swiper/react";
import CancelSvg from "@assets/svg/CancelSvg.svg";
import "swiper/css";
import cls from "@utils/cls";
import { useState } from "react";
const TIME_HOURS = Array.from(Array(24).keys());
const TIME_MINUTES = Array(12)
  .fill(0)
  .map((num, i) => i * 5);

type TSettingTime = {
  onClick: () => void;
};
const SettingTime = ({ onClick }: TSettingTime) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  return (
    <div className="relative ml-[1rem] rounded-[1rem] bg-bgColor-100 p-[2rem] shadow-md">
      <div className="relative flex justify-center">
        <span className="Cap3">목표시간</span>
        <img
          src={CancelSvg}
          alt="close"
          className="absolute right-0 w-[2rem] cursor-pointer"
          onClick={onClick}
        />
      </div>
      <div className="mt-[1.4rem] grid grid-cols-[3fr_1fr]">
        <div className="flex justify-self-center">
          <Swiper
            className="h-[16.8rem]  px-[1.1rem]"
            direction={"vertical"}
            slidesPerView={3}
            mousewheel
            loopAdditionalSlides={5}
            slideToClickedSlide
            centeredSlides
            onSlideChange={(swiper) => setHours(swiper.realIndex)}
          >
            {TIME_HOURS.map((hour) => (
              <SwiperSlide key={hour}>
                <div
                  className={cls(
                    "flex h-[5.6rem] cursor-pointer items-center",
                    hours === hour
                      ? "H2 text-primary-700"
                      : "text-[2rem]  font-medium text-primary-500"
                  )}
                >
                  {(hour + "").padStart(2, "0")}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="H2  flex items-center">:</div>
          <Swiper
            className="h-[16.8rem] px-[1.1rem] "
            direction={"vertical"}
            slidesPerView={3}
            mousewheel
            loopAdditionalSlides={5}
            slideToClickedSlide
            centeredSlides
            onSlideChange={(swiper) => setMinutes(swiper.realIndex * 5)}
          >
            {TIME_MINUTES.map((minute) => (
              <SwiperSlide key={minute}>
                <div
                  className={cls(
                    "flex h-[5.6rem] cursor-pointer items-center",
                    minutes === minute
                      ? "H2 text-primary-700"
                      : "text-[2rem]  font-medium text-primary-500"
                  )}
                >
                  {(minute + "").padStart(2, "0")}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex-center absolute left-0 h-[16.8rem] w-full  px-[2rem]">
            <div className="h-[5.6rem] w-full border-t border-b border-primary-400" />
          </div>
        </div>
        <span className="H2 flex items-center justify-center">시간</span>
      </div>
      <div className="mt-[2rem] grid grid-cols-2 gap-[1.6rem]">
        <button
          className="Sub2 rounded-xl border border-primary-500"
          onClick={onClick}
        >
          취소
        </button>
        <button className="Sub2 rounded-xl bg-primary-main py-[1rem] text-primary-100">
          저장
        </button>
      </div>
    </div>
  );
};

export default SettingTime;
