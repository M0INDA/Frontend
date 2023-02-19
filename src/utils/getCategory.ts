/**카테고리 이름 받기 */

export type TCate = "DEV" | "LANGUAGE" | "CAREER" | "HOBBY" | "PUBLIC" | "ETC";

export const categorys = {
  DEV: "전체 분야",
  LANGUAGE: "어학",
  CAREER: "취업 준비",
  HOBBY: "취미, 교양",
  PUBLIC: "고시, 공무원",
  ETC: "기타",
};

const getCategory = (category: TCate) => {
  return categorys[category];
};

export default getCategory;
