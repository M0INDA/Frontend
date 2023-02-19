import { TCate } from "@utils/getCategory";
import { TNumber } from "@utils/getIcon";

export interface IIcon {
  i : number;
  icon: string;
}

export interface IOpenStudy {
  icon: string;
  title: string | number; 
  studyName: string | number;
  category: string;
  tel: string;
  hashtag: string[];
  startDate: Date;
  content: string;
}

/**스터디 조회 */
export interface IStudys {
  DDay?: number;
  category: TCate;
  content: string;
  createdAt: Date;
  hashtag: string;
  icon: TNumber;
  id: string;
  memberCnt?: number;
  startDate: string;
  studyName: string;
  studyStatus: string;
  targetTime: number;
  tel: string;
  title: string;
  updatedAt: Date;
  userId: string;
  views: number;
}
