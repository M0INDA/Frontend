import SettingSvg from "@assets/svg/SettingSvg.svg";
import SmileSvg from "@assets/svg/SmileSvg.svg";

const Profile = () => {
  return (
    <div className="mb-[3.2rem] h-[33rem] w-[44.6rem] rounded-[1rem] bg-white px-[2.4rem] pt-[3rem] pb-[2.8rem]">
      <div className="flex justify-between">
        <span className="H2">내 프로필</span>
        <img
          src={SettingSvg}
          alt="settingcon"
          className="h-[2.2rem] w-[2.2rem] cursor-pointer"
        />
      </div>
      <div className="mt-[3rem] flex">
        <div className="ml-[2.9rem] h-[9.6rem] w-[9.6rem] rounded-full bg-primary-sub1" />
        <div className="ml-[8.8rem] flex flex-col justify-center">
          <p className="H2 text-primary-600">닉네임 여기</p>
          <p className="Cap1 text-primary-500">emailhere@mail.com</p>
        </div>
      </div>
      <div className="mt-[3.8rem] flex gap-[2.6rem]">
        <div className="flex h-[8rem] w-[18.6rem] rounded-[1rem] bg-primary-sub3 py-[1.5rem] px-[1.7rem]">
          <div className="flex-center h-[4.6rem] w-[4.6rem] rounded-[1rem] bg-white">
            <img
              src={SmileSvg}
              alt="smilecon"
              className="h-[2.4rem] w-[2.4rem]"
            />
          </div>
          <div className="ml-[1.3rem]">
            <p className="Cap3 text-primary-500">평가점수</p>
            <p className="H2 text-primary-600">4점</p>
          </div>
        </div>
        <div className="flex h-[8rem] w-[18.6rem] rounded-[1rem] bg-primary-sub3 py-[1.5rem] pl-[1.7rem]">
          <div className="flex-center h-[4.6rem] w-[4.6rem] rounded-[1rem] bg-white">
            <img
              src={SmileSvg}
              alt="smilecon"
              className="h-[2.4rem] w-[2.4rem]"
            />
          </div>
          <div className="ml-[1.3rem]">
            <p className="Cap3 text-primary-500">누적 공부시간</p>
            <p className="H2 text-primary-600">900h 59m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
