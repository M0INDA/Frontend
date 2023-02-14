export type TStudyStatus = "모집중" | "진행중" | "완료";
export interface IStudyStatus {
  status: TStudyStatus;
  color: string;
  style: string;
}

/** 스터디 일지 */
export interface IDiary {
  id: string;
  userId: number;
  nickname: string;
  avatarImg: string;
  content: string;
  createdAt: Date;
}

// 나의 스터디
export interface IMyStudy {
  id: string;
  hostUserId: string;
  category: string; //enum
  studyName: string;
  icon: string;
  studyStatus: TStudyStatus; // enum
  targetTime: number;
  members: number; // 참여중인 멤버수
  hashTags: string[]; // 해시태그 배열
}

// 목표시간 props
export interface ITargetTimeProps {
  studyId: string;
  targetTime: number;
}

// 맴버 모양
export interface IMember {
  id: string;
  userId: string;
  nickname: string;
  avatarImg: string;
  checkIn: Date;
  todayTime: number;
}
