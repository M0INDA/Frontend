import useInterval from "@hooks/useInterval";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type StudyState = "study" | "rest" | "end";

const Timer = () => {
  const [isRun, setIsRun] = useState(false);
  const [defaultTime, setDefaultTiem] = useState({ studyTime: 0, restTime: 0 });
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [studyState, setStudyState] = useState<StudyState>("study");
  const studyRef = useRef<HTMLInputElement>(null);
  const restRef = useRef<HTMLInputElement>(null);
  const cycleRef = useRef<number>(0);

  // 1초마다 실행시킬 함수
  const interValCallback = useCallback(() => {
    setTotalTime((prev) => prev - 1);
  }, []);

  // isRun이 true일 때 interval 실행
  useInterval(isRun, interValCallback);

  // isRun을 true false로 토글하는 기능. 32번째 줄은 필요없어 보인다.
  const onClickToggle = useCallback(() => {
    if (cycleRef.current === 0) cycleRef.current = 3;
    setIsRun((prev) => !prev);
  }, []);

  // reset 버튼을 클릭했을 때 실행시킬 함수
  const onClickReset = useCallback(() => {
    if (!studyRef.current || !restRef.current) return;
    const studyTime = +studyRef.current?.value;
    const restTime = +restRef.current?.value;
    setIsRun(false);
    setTotalTime(studyTime * 4 + restTime * 3);
  }, []);

  // 시간을 문자열로 변환하여 00:00처럼 보이게 하는 기능
  const viewTime = useMemo(() => {
    const minutes = (time / 60) | 0;
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }, [time]);

  // 집중시간 / 쉬는시간을 입력하고 세팅하는 함수
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!studyRef.current || !restRef.current) return;
    // const studyTime = +studyRef.current?.value * 60;
    // const restTime = +restRef.current?.value * 60;
    const studyTime = +studyRef.current?.value;
    const restTime = +restRef.current?.value;
    setTotalTime(studyTime * 4 + restTime * 3);
    setDefaultTiem({ studyTime, restTime });
  };

  // 총시간과 디폴트 시간이 변경되었을 때 실행
  useEffect(() => {
    const { studyTime, restTime } = defaultTime;
    if (!studyTime || !restTime) return;
    const sumTime = studyTime + restTime;
    const cycle = ((totalTime + restTime) / sumTime) | 0;
    const remainTime = (totalTime + restTime) % sumTime || sumTime;
    cycleRef.current = cycle;
    if (totalTime === 0) {
      setStudyState("study");
      setTotalTime(studyTime * 4 + restTime * 3);
      setTime(studyTime);
      setIsRun(false);
      return;
    }
    if (cycle) {
      setTime(
        remainTime <= restTime
          ? remainTime % studyTime || restTime
          : (remainTime - restTime) % studyTime || studyTime
      );
      setStudyState(remainTime <= restTime ? "rest" : "study");
    } else {
      setTime((remainTime - restTime) % studyTime || studyTime);
      setStudyState("study");
    }
  }, [totalTime, defaultTime]);

  return (
    <div className="flex-center h-screen">
      <div className="flex w-[30rem] flex-col items-center justify-center space-y-10 bg-red-200 py-[5rem]">
        <span>{studyState}</span>
        <span className="text-[2rem]">{viewTime}</span>
        <div className="space-x-3">
          <button
            className="border border-primary-600 p-2 text-[1.6rem]"
            onClick={onClickToggle}
          >
            {isRun ? "stop" : "start"}
          </button>
          <button
            className="border border-primary-600 p-2 text-[1.6rem]"
            onClick={onClickReset}
          >
            reset
          </button>
        </div>
        <form className="flex flex-col space-y-3" onSubmit={onSubmit}>
          <input type="number" placeholder="공부시간" ref={studyRef} />
          <input type="number" placeholder="짧은 휴식" ref={restRef} />
          <button className="w-full border border-primary-700 bg-gray-200 py-3">
            세팅
          </button>
        </form>
      </div>
    </div>
  );
};

export default Timer;
