/** 스터디 상태 타입 */
export type studyStatus = "모집중" | "진행중" | "완료";

/** 스터디 일지 */
export interface IDiary {
  diaryId: number;
  userId: number;
  content: string;
  createdAt: string;
}
