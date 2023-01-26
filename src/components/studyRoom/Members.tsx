import ArrowSvg from "@assets/svg/ArrowSvg";
import { Children } from "react";

const Members = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[6fr_8.6fr_8.6fr] px-[0.6rem]">
        {Children.toArray(
          Headers.map((title: string) => (
            <h2 className="Sub2 text-primary-500">{title}</h2>
          ))
        )}
      </div>
      <ul className="flex flex-col">
        {Children.toArray(
          Users.map((user) => (
            <li className="grid grid-cols-[6fr_8.6fr_8.6fr] items-center border-b p-[2.2rem_1.1rem] last:border-none last:pb-0">
              <div className={`aspect-square w-[3rem] rounded-lg bg-red-300`} />
              <span className="Cap4">{user.checkIn}</span>
              <span className="Cap4">{user.studyTime}</span>
            </li>
          ))
        )}
      </ul>
      <div className="Sub2 flex-center mt-[1.5rem]  cursor-pointer space-x-[0.3rem]  pt-[0.6rem] text-primary-500">
        <span>더보기</span>
        <ArrowSvg className="w-[2.2rem] rotate-[-90deg]" strokeWidth="2.3" />
      </div>
    </div>
  );
};

export default Members;

const Headers = ["닉네임", "출석시간", "오늘 공부 시간"];

const Users = [
  { profile: "#D9D9D9", checkIn: "09:42:15", studyTime: "10:42:00" },
  { profile: "#AFF8D0", checkIn: "08:42:15", studyTime: "09:42:00" },
  { profile: "#ADB0FE", checkIn: "07:42:15", studyTime: "08:42:00" },
  { profile: "#fcaed0", checkIn: "06:42:15", studyTime: "07:42:00" },
  { profile: "#fcdfae", checkIn: "05:42:15", studyTime: "06:42:00" },
  { profile: "#fcaeae", checkIn: "04:42:15", studyTime: "05:42:00" },
];
