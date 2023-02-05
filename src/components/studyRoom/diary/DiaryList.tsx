import makeSection from "@utils/makeSection";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DiaryItem from "./DiaryItem";
import { IDiary } from "@allTypes/myStudy";
import { Scrollbars } from "react-custom-scrollbars-2";
import useObserver from "@hooks/useObserver";

type Diarys = IDiary[] | [];

const DiaryList = () => {
  const scrollRef = useRef<Scrollbars>(null);
  const [page, setPage] = useState(0);
  const [diarys, setDiarys] = useState<Diarys>([]);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const getPage = useCallback(() => {
    if (!scrollRef.current) return;
    setPage((prev) => prev + 1);
    setScrollHeight(scrollRef.current.getScrollHeight());
  }, []);

  const [targetRef] = useObserver(getPage);

  // 채팅 날짜별로 데이터를 묶어주는 함수
  const DiarySections = useMemo(() => {
    if (!diarys || diarys.length === 0) return [];
    return makeSection(diarys);
  }, [diarys]);

  useEffect(() => {
    if (!scrollRef.current || page !== 0) return;
    scrollRef.current?.scrollToBottom();
  }, [DiarySections, page]);

  useEffect(() => {
    setDiarys((prev) => [
      ...prev,
      ...diaryData.slice(page * 10, 10 * (page + 1)).reverse(),
    ]);
  }, [page]);

  useEffect(() => {
    if (DiarySections.length <= 10 || !scrollRef.current) return;
    let currentHeight = scrollRef.current.getScrollHeight();
    if (scrollHeight === currentHeight) return;
    scrollRef?.current.scrollTop(currentHeight - scrollHeight);
  }, [DiarySections]);

  return (
    <Scrollbars autoHide ref={scrollRef}>
      <div ref={targetRef} />
      <div className="flex flex-col px-[3rem] ">
        {Object.entries(DiarySections || {})?.map(([day, diarys]) => (
          <div
            key={day}
            className="flex flex-col space-y-[2.8rem] border-b py-[2.8rem]  last:border-none"
          >
            <span className="flex-center Sub2 w-[11.6rem] rounded-full bg-primary-500 py-[0.6rem] text-primary-100">
              {day}
            </span>
            <ul className="flex flex-col space-y-[1.4rem]">
              {diarys?.map((diary) => (
                <DiaryItem key={diary.userId} diary={diary} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Scrollbars>
  );
};

export default DiaryList;

const diaryData: Diarys = [
  {
    diaryId: 1,
    userId: 1,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:15.000Z",
  },
  {
    diaryId: 2,
    userId: 2,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:20.000Z",
  },
  {
    diaryId: 1,
    userId: 3,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:22.000Z",
  },
  {
    diaryId: 1,
    userId: 4,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:23.000Z",
  },
  {
    diaryId: 1,
    userId: 5,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:24.000Z",
  },
  {
    diaryId: 1,
    userId: 6,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:25.000Z",
  },
  {
    diaryId: 1,
    userId: 7,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:26.000Z",
  },
  {
    diaryId: 1,
    userId: 8,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:27.000Z",
  },
  {
    diaryId: 1,
    userId: 9,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:28.000Z",
  },
  {
    diaryId: 1,
    userId: 10,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:29.000Z",
  },
  {
    diaryId: 1,
    userId: 11,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:30.000Z",
  },
  {
    diaryId: 1,
    userId: 12,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:40.000Z",
  },
  {
    diaryId: 1,
    userId: 13,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:42.000Z",
  },
  {
    diaryId: 1,
    userId: 14,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:43.000Z",
  },
  {
    diaryId: 1,
    userId: 15,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:44.000Z",
  },
  {
    diaryId: 1,
    userId: 16,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:45.000Z",
  },
  {
    diaryId: 1,
    userId: 17,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:47.000Z",
  },
  {
    diaryId: 1,
    userId: 18,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:48.000Z",
  },
  {
    diaryId: 1,
    userId: 19,
    content:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요",
    createdAt: "2023-01-04T16:04:49.000Z",
  },
  {
    diaryId: 2,
    userId: 20,
    content: "반가워용",
    createdAt: "2023-01-04T16:04:50.000Z",
  },
  {
    diaryId: 3,
    userId: 21,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-04T16:04:51.000Z",
  },
  {
    diaryId: 4,
    userId: 22,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-05T16:04:52.000Z",
  },
  {
    diaryId: 5,
    userId: 23,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-05T16:04:53.000Z",
  },
  {
    diaryId: 6,
    userId: 24,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-05T16:04:54.000Z",
  },
  {
    diaryId: 9,
    userId: 25,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-05T16:05:56.000Z",
  },
  {
    diaryId: 7,
    userId: 26,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-06T16:04:57.000Z",
  },
  {
    diaryId: 8,
    userId: 27,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-06T16:04:58.000Z",
  },
  {
    diaryId: 10,
    userId: 28,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-06T16:06:57.000Z",
  },
  {
    diaryId: 11,
    userId: 29,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-06T16:07:58.000Z",
  },
  {
    diaryId: 11,
    userId: 30,
    content: "ㅇㅎㅇ",
    createdAt: "2023-01-06T16:07:59.000Z",
  },
].reverse();
