import { TNumber } from "@utils/getIcon";

export interface IIcon {
  icon: number;
}

export interface IRecruit {
  recruittitle: string | number;
}

export interface IGroupName {
  studygroupname: string | number;
}

export interface IContact {
  contact: string | number;
}

export interface IHashtag {
  hashtag: string | number;
}

export interface IStartdate {
  startdate: number;
}

export interface IStudyDetail {
  studydetail: string | number;
}

/**새로 작성된 스터디 구인글 */
export interface INewStudy {
  category: string;
  content: string;
  createdAt: Date;
  hashtag: string;
  icon: TNumber;
  id: string;
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
