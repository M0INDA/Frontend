import { Dispatch, SetStateAction } from "react";
import { INewStudy } from "./study";

/**현재 페이지 상태 */
export interface INowProps {
  now?: string;
}

/**카테고리 버튼 */
export interface IBtnProps {
  setClick: Dispatch<SetStateAction<string>>;
  click: string;
}

/**새로 생긴 스터디 전달 */
export interface INewProps {
  data: INewStudy[];
}
