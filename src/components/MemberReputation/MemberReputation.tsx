import React from "react";
import { useState } from "react";
import cls from "@utils/cls";
import RatingSvg from "@assets/svg/RatingSvg";

const MemberReputation = () => {
  const [isreputationModal, setIsReputationModal] = useState(false);
  const handleModal = () => {
    setIsReputationModal(!isreputationModal);
  };

  const members = [
    "팀원 1",
    "스터디원 2",
    "스터디원 3",
    "nicknamehere",
    "하하haha_2",
    "namehere",
    "namehere",
    "namehere",
    "namehere",
  ];
  const [click, setClick] = useState("팀원 1");
  return (
    <div>
      {isreputationModal && (
        <div className="boxShadow absolute z-[999] h-[70.6rem] w-[86.3rem] bg-primary-100">
          <p className="mx-auto mt-[4.3rem] w-[25.2rem] text-[2.4rem] font-bold leading-[2.8rem]">
            주3회 필수 모각디 스터디
          </p>
          <p className="Cap1 mx-auto w-[44.1rem] text-primary-500">
            함께한 스터디원에게 좋은 평가를 남기면 스터디원의 점수가 올라갑니다.
          </p>
          <div className="flex">
            <div className="mt-[3.6rem] ml-[3.5rem]">
              {members.map((member) => (
                <div
                  key={member}
                  onClick={() => setClick(member)}
                  className={cls(
                    "H3 h-[5.4rem] w-[21rem] cursor-pointer py-[1.4rem] px-[3.6rem]",
                    member === click
                      ? "text-primary-[#1E1E1E] rounded-[1rem] bg-primary-sub3 "
                      : " text-primary-500"
                  )}
                >
                  {member}
                </div>
              ))}
            </div>
            <div className="mt-[3.6rem] ml-[2.5rem] flex h-[52.5rem] w-[52.8rem] flex-col rounded-[1rem] bg-primary-sub3">
              <div className="flex">
                <RatingSvg className="mt-[3.3rem] ml-[21.9rem] h-[2.2rem] w-[2.2rem]" />
                <p className="H3 mt-[3rem] ml-[0.5rem] h-[2.6rem] w-[7.1rem] leading-[2.6rem]">
                  평가 항목
                </p>
              </div>
              <div>
                <p className="Sub2 mt-[3.6rem] ml-[5.6rem]">
                  1. 스터디 참여를 적극적으로 열심히 했어요
                </p>
                <div className="flex">
                  <input type="radio" />
                </div>
                <p className="Sub2 mt-[3.6rem] ml-[5.6rem]">
                  2. 규칙으로 정한 공부시간/출석 시간을 잘 지켰어요.
                </p>
                <div className="flex">
                  <input type="radio" />
                </div>
                <p className="Sub2 mt-[3.6rem] ml-[5.6rem]">
                  3. 지각/비방/탈주 등으로 스터디 분위기를 해치지 않았어요.
                </p>
                <div className="flex">
                  <input type="radio" />
                </div>
                <p className="Sub2 mt-[3.6rem] ml-[5.6rem]">
                  4. 채팅이나 스터디 관련 피드백이 빨라요.
                </p>
                <div className="flex">
                  <input type="radio" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberReputation;
