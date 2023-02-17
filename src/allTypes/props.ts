import { Dispatch, SetStateAction } from "react";
import { IStudys } from "./study";

/**현재 페이지 상태 */
export interface INowProps {
  now?: string;
}

/**카테고리 버튼 */
export interface IBtnProps {
  setClick: Dispatch<SetStateAction<string>>;
  click: string;
}

/**스터디 데이터 전달 */
export interface IStudyProps {
  data: IStudys[];
}
