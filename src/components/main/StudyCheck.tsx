import cls from "@utils/cls";
import { INowProps } from "allTypes/props";

const StudyCheck = ({ now }: INowProps) => {
  return (
    <div className="mt-[1.8rem]">
      <button
        className={cls(
          "Sub2 h-[6.8rem] rounded-[1rem] bg-primary-main text-white",
          now ? "w-[38.7rem]" : "w-[44.6rem]"
        )}
      >
        오늘 출석체크
      </button>
    </div>
  );
};

export default StudyCheck;
