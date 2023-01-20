import { useState } from "react";
import cls from "@utils/cls";

const CategoryBtn = () => {
  const categorys = [
    "전체 분야",
    "어학",
    "취업 준비",
    "취미, 교양",
    "고시, 공무원",
    "기타",
  ];
  const [click, setClick] = useState("전체 분야");
  return (
    <div className="mt-[10rem]">
      {categorys.map((cate) => (
        <div
          key={cate}
          onClick={() => setClick(cate)}
          className={cls(
            "H3 h-[5.4rem] w-[21rem] cursor-pointer py-[1.4rem] px-[3.6rem]",
            cate === click
              ? "rounded-full bg-primary-500 text-primary-100"
              : " text-primary-600"
          )}
        >
          {cate}
        </div>
      ))}
    </div>
  );
};

export default CategoryBtn;
