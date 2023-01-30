import makeSection from "@utils/makeSection";
import { useMemo } from "react";
import DiaryItem from "./DiaryItem";
import { IDiary } from "@allTypes/myStudy";

type Diarys = IDiary[] | [];

const DiaryList = () => {
  // 채팅 날짜별로 데이터를 묶어주는 함수
  const DiarySections = useMemo(() => {
    if (!diarys || diarys.length === 0) return [];
    return makeSection(diarys);
  }, []);

  return (
    <div className="flex min-h-[34rem] flex-col">
      {Object.entries(DiarySections || {})?.map(([day, diarys]) => (
        <div className="flex flex-col space-y-[2.8rem] border-b py-[2.8rem] first:pt-0 last:border-none">
          <span className="flex-center Sub2 w-[11.6rem] rounded-full bg-primary-500 py-[0.6rem] text-primary-100">
            {day}
          </span>
          <ul className="flex flex-col space-y-[1.4rem]">
            {diarys?.map((diary) => (
              <DiaryItem key={diary.diaryId} diary={diary} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DiaryList;

const diarys: Diarys = [
  {
    diaryId: 1,
    userId: 253,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:55.000Z",
  },
  {
    diaryId: 2,
    userId: 253,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-04T16:04:56.000Z",
  },
  {
    diaryId: 3,
    userId: 253,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-04T16:04:57.000Z",
  },
  {
    diaryId: 4,
    userId: 253,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-05T16:04:56.000Z",
  },
  {
    diaryId: 5,
    userId: 253,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-05T16:04:57.000Z",
  },
  {
    diaryId: 6,
    userId: 253,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-05T16:04:56.000Z",
  },
  {
    diaryId: 7,
    userId: 253,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-06T16:04:57.000Z",
  },
  {
    diaryId: 8,
    userId: 253,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-06T16:04:58.000Z",
  },
];
