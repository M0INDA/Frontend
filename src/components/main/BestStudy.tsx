import { IStudyProps } from "@allTypes/props";
import { iconBackgrounds } from "@utils/getIcon";
import { useNavigate } from "react-router-dom";
import cls from "@utils/cls";

const BestStudy = ({ data }: IStudyProps) => {
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="mt-[5.4rem] ">
      <div className="flex justify-between">
        <h2 className="H2 mb-[1.8rem] text-primary-600">
          카테고리 별 인기스터디
        </h2>
        <button
          onClick={() => navigate("/study")}
          className="Cap1 text-primary-500"
        >
          더보기
        </button>
      </div>
      {data?.map((study, i) => (
        <div
          key={study.id}
          className={cls(
            "flex h-[8.6rem] w-[65.6rem] justify-between rounded-[1rem] px-[3rem]",
            i === 0 && "mb-[1.3rem] bg-primary-sub2"
          )}
        >
          <div className="flex-center">
            <div
              className={cls(
                "mr-[2rem] h-[3.6rem] w-[3.6rem] rounded-full",
                study?.icon && iconBackgrounds[`${study.icon}`]
              )}
            />
            <div>
              <p className="Sub1 text-primary-600">{study.title}</p>
              <p className="Cap4 text-primary-500">{study.content}</p>
            </div>
          </div>
          <div className="Cap3 flex flex-col items-end justify-center">
            <p className="text-primary-500">모집마감</p>
            <p className="text-primary-main ">D-{study.DDay}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestStudy;
