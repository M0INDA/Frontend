import cls from "@utils/cls";
import { useMatch, useNavigate } from "react-router-dom";

const SideNav = () => {
  const homeMatch = useMatch("/mystudy/:studyId");
  const diaryMatch = useMatch("/mystudy/:studyId/diary");
  const navigate = useNavigate();
  return (
    <aside className="col-span-1 col-start-2 flex min-w-[16rem] flex-col">
      <nav className="rounded-[1rem] bg-bgColor-100 py-[2.4rem]">
        <ul>
          <li
            className={cls(
              "cursor-pointer py-[1.4rem] pl-[3.6rem]",
              homeMatch
                ? "H3 text-primary-600"
                : "text-[1.8rem] font-medium text-primary-500"
            )}
            onClick={() => navigate("/mystudy/1")}
          >
            그룹 홈
          </li>
          <li
            className={cls(
              "cursor-pointer py-[1.4rem] pl-[3.6rem]",
              diaryMatch
                ? "H3 text-primary-600"
                : "text-[1.8rem] font-medium text-primary-500"
            )}
            onClick={() => navigate("/mystudy/1/diary")}
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
  );
};

export default SideNav;
