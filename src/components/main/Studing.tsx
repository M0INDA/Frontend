import NextSvg from "@assets/svg/NextSvg.svg";
import CategorySvg from "@assets/svg/CategorySvg.svg";
import GroupSvg from "@assets/svg/GroupSvg.svg";
import cls from "@utils/cls";
import { INowProps } from "allTypes/props";
import { useNavigate } from "react-router-dom";
import StudyApi from "@apis/query/studyApi";
import getIcon, { iconBackgrounds } from "@utils/getIcon";
import { IStudys } from "@allTypes/study";
import getCategory from "@utils/getCategory";

const Studing = ({ now }: INowProps) => {
  const navigate = useNavigate();
  const { data } = StudyApi.JoinStudyGroup();

  /**해시태그 만들기 */
  const makeHash = (str: string) => {
    return str
      .split(",")
      .map((x) => "#" + x)
      .join(" ");
  };

  return (
    <>
      {data?.map((study: IStudys) => (
        <div
          key={study.id}
          className={cls(
            "mb-[1.6rem] flex h-[11.8rem] items-center rounded-[1.4rem] border border-solid border-primary-350 px-[1.6rem]",
            now ? "w-[50.4rem]" : "w-[44.6rem]"
          )}
          onClick={() => navigate(`/mystudy/${study.id}`)}
        >
          <div
            className={cls(
              "flex-center h-[5.4rem] w-[5.4rem] rounded-[1.2rem]",
              study?.icon && iconBackgrounds[`${study.icon}`]
            )}
          >
            <img
              src={getIcon(study.icon)}
              alt="studyIcon"
              className="h-[4rem] w-[4rem]"
            />
          </div>
          <div className="ml-[1.5rem]">
            <p className="Sub2">{study.studyName}</p>
            <p className="Cap4 text-primary-500">{makeHash(study.hashtag)}</p>
            <div className="Cap3 mt-[1.2rem] flex text-primary-500">
              <div className="flex-center">
                <img
                  src={GroupSvg}
                  alt="cateCon"
                  className="mr-[0.6rem] h-[2rem] w-[2rem] "
                />
                <span>{"??"}명 참여중</span>
              </div>
              <div className="flex-center ml-9">
                <img
                  src={CategorySvg}
                  alt="cateCon"
                  className="mr-[0.6rem] h-[2rem] w-[2rem] "
                />
                <span>{getCategory(study.category)}</span>
              </div>
            </div>
          </div>
          <img
            src={NextSvg}
            alt="NextIcon"
            className="ml-auto h-[2.4rem] w-[2.4rem]"
          />
        </div>
      ))}
    </>
  );
};

export default Studing;
