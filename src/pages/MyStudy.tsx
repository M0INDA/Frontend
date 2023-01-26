import Layout from "@components/layout/Layout";
import cls from "@utils/cls";
import getIcon from "@utils/getIcon";
import { useMatch } from "react-router-dom";
import GroupSvg from "@assets/svg/GroupSvg.svg";
import ArrowSvg from "@assets/svg/ArrowSvg";
import { useCallback, useState } from "react";
import LineProgressBar from "@components/studyRoom/LineProgressBar";
import Members from "@components/studyRoom/Members";
import Chats from "@components/studyRoom/Chats";
import CancelSvg from "@assets/svg/CancelSvg.svg";
const MyStudy = () => {
  const homeMatch = useMatch("/mystudy/:studyId");
  const diaryMatch = useMatch("/mystudy/:studyId/diary");
  const [isSetting, setIsSetting] = useState(false);

  const onClickSetting = useCallback(() => {
    setIsSetting((prev) => !prev);
  }, []);

  return (
    <Layout hasBgColor={true}>
      <div className="grid grid-cols-[2fr_9fr_3fr] gap-[2.6rem] py-[5rem]">
        <aside>
          <nav className="min-w-[16rem] rounded-[1rem] bg-bgColor-100 py-[2.4rem]">
            <ul>
              <li
                className={cls(
                  "cursor-pointer py-[1.4rem] pl-[3.6rem]",
                  homeMatch
                    ? "H3 text-primary-600"
                    : "text-[1.8rem] font-medium text-primary-500"
                )}
              >
                홈
              </li>
              <li
                className={cls(
                  "cursor-pointer py-[1.4rem] pl-[3.6rem]",
                  diaryMatch
                    ? "H3 text-primary-600"
                    : "text-[1.8rem] font-medium text-primary-500"
                )}
              >
                스터디일지
              </li>
              <li className="cursor-pointer py-[1.4rem] pl-[3.6rem] text-[1.8rem] font-medium text-primary-500">
                상태
              </li>
              <li className="cursor-pointer py-[1.4rem] pl-[3.6rem] text-[1.8rem] font-medium text-primary-500">
                그룹관리
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex min-w-[59.3rem] flex-col space-y-[2.6rem]">
          <section className="grid grid-cols-2 rounded-[1rem] bg-bgColor-100 p-[1.3rem_3rem]">
            <div className="flex items-center space-x-[1.6rem]">
              <div className="flex-center h-[5.4rem] w-[5.4rem] rounded-[1.2rem] bg-[#94B7F7]">
                <img
                  src={getIcon(17)}
                  className="h-[4rem] w-[4rem]"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col justify-between py-[0.2rem]">
                <h3 className="Sub2">토익 900 달성 스터디</h3>
                <span className="Cap4 text-primary-500">
                  #어학 #매일피드백 #700이상 #인증
                </span>
              </div>
            </div>
            <div className="flex items-center  space-x-[1rem] text-primary-500">
              <span className="Cap3 flex space-x-[0.6rem]">
                <img
                  src={GroupSvg}
                  className="mr-[0.6rem] h-[2rem] w-[2rem]"
                  alt="icon"
                />
                4명 참여중
              </span>
              <span className="Cap3 space-x-[0.6rem text-primary-500] flex">
                <div className="mr-[0.6rem] h-[2rem] w-[2rem] bg-primary-500" />
                어학
              </span>
              <span className="flex flex-1 cursor-pointer justify-end text-primary-500">
                <ArrowSvg
                  className="w-[2.2rem] rotate-[-90deg]"
                  strokeWidth="2.4"
                />
              </span>
            </div>
          </section>
          <section className="rounded-[1rem] bg-bgColor-100">
            <LineProgressBar onClick={onClickSetting} />
          </section>
          <div className="bg-slate- grid grid-cols-[3.58fr_5.34fr] gap-[2.6rem]">
            <section className="flex min-h-[62rem] flex-col rounded-[1rem] bg-bgColor-100 p-[3rem]">
              <h2 className="H2 mb-[1.8rem]">스터디원 현황</h2>
              <Members />
            </section>
            <section className="flex min-h-[62rem] flex-col rounded-[1rem] bg-bgColor-100 p-[3rem]">
              <h2 className="H2 mb-[1.8rem]">전체 채팅</h2>
              <Chats />
            </section>
          </div>
        </div>
        {isSetting ? (
          <aside className="min-w-[20rem]">
            <div className="rounded-[1rem] bg-bgColor-100 p-[2rem] shadow-md">
              <div className="relative flex justify-center">
                <span className="Cap3">목표시간</span>
                <img
                  src={CancelSvg}
                  alt="close"
                  className="absolute right-0 w-[2rem] cursor-pointer"
                />
              </div>
            </div>
          </aside>
        ) : (
          <div />
        )}
      </div>
    </Layout>
  );
};

export default MyStudy;
