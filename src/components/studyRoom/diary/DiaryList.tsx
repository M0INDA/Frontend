import makeSection from "@utils/makeSection";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DiaryItem from "./DiaryItem";
import { IDiary } from "@allTypes/studyRoom";
import { Scrollbars } from "react-custom-scrollbars-2";
import useObserver from "@hooks/useObserver";

type Diarys = IDiary[] | [];

const DiaryList = () => {
  const scrollRef = useRef<Scrollbars>(null);
  const [page, setPage] = useState(0);
  const [diarys, setDiarys] = useState<Diarys>([]);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  // 1. 스크롤 정상에서 실행될 함수
  const getPage = useCallback(() => {
    if (!scrollRef.current) return;
    setPage((prev) => prev + 1);
    setScrollHeight(scrollRef.current.getScrollHeight());
  }, []);

  const [targetRef] = useObserver(getPage);

  // 3. 채팅 날짜별로 데이터를 묶어주는 함수
  const DiarySections = useMemo(() => {
    if (!diarys || diarys.length === 0) return {};
    return makeSection(diarys);
  }, [diarys]);

  // 마운트 시에 스크롤을 가장 밑으로 옮긴다. ( 서버 연결시에 수정해야함 )
  useEffect(() => {
    if (scrollRef.current && page === 0) {
      scrollRef.current?.scrollToBottom();
    }
  }, [DiarySections, page]);

  // 2. 1번이 실행되고 나서 데이터를 가져오는 역할.  지워야할 코드 (서버 요청 대신)
  useEffect(() => {
    setDiarys((prev) => [
      ...prev,
      ...[].slice(page * 10, 10 * (page + 1)).reverse(),
    ]);
  }, [page]);

  console.log(DiarySections);

  // 4. 현재 스크롤 높이 - 이전 스크롤 높이만큼 스크롤 위치를 조정한다.
  useEffect(() => {
    if (scrollRef.current) {
      let currentHeight = scrollRef.current.getScrollHeight();
      if (currentHeight !== scrollHeight) {
        scrollRef?.current.scrollTop(currentHeight - scrollHeight);
      }
    }
  }, [DiarySections, scrollHeight]);

  return (
    <Scrollbars autoHide ref={scrollRef}>
      <div ref={targetRef} />
      <div className="flex flex-col px-[3rem] ">
        {Object.entries(DiarySections || {})?.map(([day, diarys]) => (
          <div
            key={Date.now() + day}
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
