import cls from "@utils/cls";
import { BtnProps } from "@allTypes/props";

const CategoryBtn = ({ setClick, click }: BtnProps) => {
  const categorys = [
    { name: "전체 분야", cateName: "DEV" },
    { name: "어학", cateName: "LANGUAGE" },
    { name: "취업 준비", cateName: "CAREER" },
    { name: "취미, 교양", cateName: "HOBBY" },
    { name: "고시, 공무원", cateName: "PUBLIC" },
    { name: "기타", cateName: "ETC" },
  ];

  return (
    <div className="mt-[10rem]">
      {categorys.map((cate) => (
        <div
          key={cate.cateName}
          onClick={() => setClick(cate.cateName)}
          className={cls(
            "H3 h-[5.4rem] w-[21rem] cursor-pointer py-[1.4rem] px-[3.6rem]",
            cate.cateName === click
              ? "rounded-full bg-primary-500 text-primary-100"
              : " text-primary-600"
          )}
        >
          {cate.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryBtn;
