import { TNumber } from "@utils/getIcon";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudyItem from "./StudyItem";

const StudyListSection = () => {
  const [isSpread, setIsSpread] = useState(false);
  const navigate = useNavigate();

  const handleToggle = useCallback(() => {
    setIsSpread((prev) => !prev);
  }, []);

  const handleNavigate = useCallback(
    (num: string) => {
      navigate(`/mystudy/${num}`);
    },
    [navigate]
  );

  // ArrowSvg 클릭 시에 내가 속한 그룹 정보들 조회
  return (
    <section className="relative flex flex-col space-y-[0.6rem]">
      <StudyItem
        onClick={handleToggle}
        isCurrent
        isActive={isSpread}
        icon={1}
      />
      {isSpread && (
        <div className="absolute top-[8.4rem] z-10 flex w-full select-none flex-col rounded-[1rem] bg-bgColor-100 p-[1.2rem] shadow-[0.2rem_0.8rem_1.8rem_rgba(0,0,0,0.13)]">
          {data
            .filter((value) => value !== 1)
            .map((item) => (
              <StudyItem
                key={item}
                isCurrent={false}
                onClick={() => handleNavigate(item + "")}
                isActive={false}
                icon={item}
              />
            ))}
        </div>
      )}
    </section>
  );
};

export default StudyListSection;

const data: TNumber[] = [1, 2, 3, 4, 5];
