import { INowProps } from "@allTypes/props";
import cls from "@utils/cls";

const BestTag = ({ now }: INowProps) => {
  const tags = [
    "토익스터디",
    "2023 취준스터디",
    "새해 미라클모닝",
    "독서모임",
    "매일매일챌린지",
    "설연휴",
    "9시 출석체크",
  ];
  return (
    <div className={cls("", now ? "mt-[5.4rem]" : "mt-[7.2rem]")}>
      <h2 className="H2 mb-[1.8rem] text-primary-600">오늘의 인기 키워드</h2>
      <div className="col-span-1 mt-[1.8rem] flex w-[44.6rem] flex-wrap gap-[0.7rem]">
        {tags.map((tag) => {
          return (
            <div
              key={tag}
              className="Cap2 w-fit rounded-[5rem] border border-solid border-primary-200 py-[0.8rem] px-[1.6rem] text-primary-600"
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestTag;
