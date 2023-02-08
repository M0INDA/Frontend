export type TStudyStatus = "모집중" | "진행중" | "완료";

/** 스터디 일지 */
export interface IDiary {
  id: number;
  userId: number;
  nickname: string;
  avatarImg: string;
  content: string;
  createdAt: Date;
}

// 나의 스터디
export interface IStudyRoom {
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

// 내가 속한 스터디그룹 목록

export interface ITargetTime {
  studyId: string;
  hours: number;
  minutes: number;
}

export interface IMember {
  id: string;
  userId: string;
  nickname: string;
  avatarImg: string;
  checkIn: Date;
  todayTime: number;
}
