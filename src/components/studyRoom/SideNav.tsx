import type { TStudyStatus } from "@allTypes/studyRoom";
import ArrowSvg from "@assets/svg/ArrowSvg";
import CircleSvg from "@assets/svg/CircleSvg";
import cls from "@utils/cls";
import { useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";

const SideNav = () => {
  const homeMatch = useMatch("/mystudy/:studyId");
  const diaryMatch = useMatch("/mystudy/:studyId/diary");
  const [isStatusFocus, setIsStatusFocus] = useState(false);
  const [studyStatus, setStudyStatus] = useState<TStudyStatus>("모집중");
  const navigate = useNavigate();
  return (
    <aside className="col-span-1 col-start-2 flex min-w-[16rem] flex-col space-y-[6.8rem]">
      <nav className="rounded-[1rem] bg-bgColor-100 py-[2.4rem]">
        <ul>
          <li
            className={styles.navItem(Boolean(homeMatch))}
            onClick={() => navigate("/mystudy/1")}
          >
            그룹 홈
          </li>
          <li
            className={styles.navItem(Boolean(diaryMatch))}
            onClick={() => navigate("/mystudy/1/diary")}
          >
            스터디일지
          </li>
          <li className="flex items-center space-x-[1rem] py-[1.4rem] pl-[3.6rem] text-[1.8rem] font-medium text-primary-500">
            <span>상태</span>
            <div className="Cap3 flex items-center space-x-[0.5rem] rounded-full border-2 border-primary-main p-[0.3rem_1.2rem] text-primary-main">
              <span>{studyStatus}</span>
              <CircleSvg />
            </div>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col space-y-[1.8rem]">
        <h3 className="H2">스터디 관리</h3>
        <nav className="flex flex-col rounded-[1rem] bg-bgColor-100 py-[2.4rem]">
          <Link to={"/edit"}>
            <span className="H3 block  py-[1.4rem] pl-[3.6rem] text-primary-500">
              모집 상세 수정
            </span>
          </Link>
          <button
            className={styles.toggleBtn(!isStatusFocus)}
            onClick={() => setIsStatusFocus((prev) => !prev)}
          >
            <span>상태 설정</span>
            <ArrowSvg
              className={cls(
                "w-[2.2rem] transition-transform duration-300",
                isStatusFocus ? "rotate-90" : "rotate-[-90deg]"
              )}
            />
          </button>
          {isStatusFocus && (
            <div className="flex flex-col ">
              <button
                className={styles.statusBtn(studyStatus === "모집중")}
                onClick={() => setStudyStatus("모집중")}
                disabled={studyStatus === "모집중"}
              >
                모집중
              </button>
              <button
                className={styles.statusBtn(studyStatus === "진행중")}
                onClick={() => setStudyStatus("진행중")}
                disabled={studyStatus === "진행중"}
              >
                진행중
              </button>
              <button
                className={styles.statusBtn(studyStatus === "완료")}
                onClick={() => setStudyStatus("완료")}
                disabled={studyStatus === "완료"}
              >
                완료
              </button>
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;

const styles = {
  // 상태 설정 안에 있는 버튼들
  statusBtn: (bool: boolean) =>
    cls(
      "Sub2 w-full  px-[3.6rem] py-[1.2rem] text-end",
      bool ? "text-primary-main" : "text-primary-500"
    ),
  // 그룹홈 그룹일지 버튼
  navItem: (bool: boolean) =>
    cls(
      "cursor-pointer py-[1.4rem] pl-[3.6rem]",
      bool
        ? "H3 text-primary-600"
        : "text-[1.8rem] font-medium text-primary-500"
    ),
  // 상태 설정 버튼
  toggleBtn: (bool: boolean) =>
    cls(
      "flex cursor-pointer items-center justify-between  py-[1.4rem] px-[3.6rem]",
      bool
        ? "text-[1.8rem] font-medium text-primary-500"
        : "H3 text-primary-600"
    ),
};
