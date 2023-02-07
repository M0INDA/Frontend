/** 스터디 상태 타입 */
export type TStudyStatus = "모집중" | "진행중" | "완료";

/** 스터디 일지 */
export interface IDiary {
  id: number;
  userId: number;
  content: string;
  likeCnt: number;
  createdAt: Date;
}

export interface IStudy {
  id: string;
  studyName: string;
  title: string;
  category: string; // enum
  content: string;
  studyStatus: TStudyStatus; // enum
  icon: string;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITargetTime {
  studyId: string;
  hours: number;
  minutes: number;
}

export interface IMember {
  id: string;
  useId: string;
}
