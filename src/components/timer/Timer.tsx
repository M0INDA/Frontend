import useInterval from "@hooks/useInterval";
import cls from "@utils/cls";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ProgressBar from "./ProgressBar";
import TimerForm from "./TimerForm";
import CancelSvg from "@assets/svg/CancelSvg.svg";
import SettingSvg from "@assets/svg/SettingSvg.svg";
import ResetSvg from "@assets/svg/ResetSvg.svg";

type StudyState = "집중타임" | "짧은휴식" | "end";

const Timer = () => {
  const [isRun, setIsRun] = useState(false);
  const [defaultTime, setDefaultTiem] = useState({ studyTime: 0, restTime: 0 });
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [studyState, setStudyState] = useState<StudyState>("집중타임");
  const studyRef = useRef<HTMLInputElement>(null);
  const restRef = useRef<HTMLInputElement>(null);
  const cycleRef = useRef<number>(0);
  const [isSetting, setIsSetting] = useState(false);

  // 1초마다 실행시킬 함수
  const interValCallback = useCallback(() => {
    setTotalTime((prev) => prev - 1);
  }, []);

  // isRun이 true일 때 interval 실행
  useInterval(isRun, interValCallback);

  // isRun을 true false로 토글하는 기능. 32번째 줄은 필요없어 보인다.
  const onClickToggle = useCallback(() => {
    if (cycleRef.current === 0) cycleRef.current = 3;
    const { studyTime, restTime } = defaultTime;
    if (!isRun) {
      // 목표시간을 저장
      localStorage.setItem(
        "targetTime",
        Date.now() + (studyTime * 4 + restTime * 3) * 1000 + ""
      );
      // 진행 상태와 stop시간을 제거한다.
      localStorage.setItem("isRun", "1");
      localStorage.removeItem("stopTime");
    } else {
      // 정지시간 저장 / 목표 시간을 다시 정해준다. / 진행 상태를 stop으로 변경한다.
      localStorage.setItem("targetTime", Date.now() + totalTime * 1000 + "");
      localStorage.setItem("stopTime", Date.now() + "");
      localStorage.setItem("isRun", "0");
    }
    setIsRun((prev) => !prev);
  }, [defaultTime, isRun, totalTime]);

  // reset 버튼을 클릭했을 때 실행시킬 함수
  const onClickReset = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!defaultTime.studyTime || !defaultTime.restTime) return;
      const studyTime = defaultTime.studyTime;
      const restTime = defaultTime.restTime;
      localStorage.removeItem("targetTime");
      localStorage.removeItem("stopTime");
      localStorage.removeItem("isRun");
      setIsRun(false);
      setTotalTime(studyTime * 4 + restTime * 3);
    },
    [defaultTime]
  );

  // 시간을 문자열로 변환하여 00:00처럼 보이게 하는 기능
  const viewTime = useMemo(() => {
    const minutes = (time / 60) | 0;
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }, [time]);

  const progressTimes = useMemo(() => {
    const { studyTime, restTime } = defaultTime;
    const sumTime = studyTime + restTime;
    return [
      sumTime * 3 + studyTime,
      sumTime * 2 + studyTime,
      sumTime + studyTime,
      studyTime,
    ];
  }, [defaultTime]);

  // 집중시간 / 쉬는시간을 입력하고 세팅하는 함수
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!studyRef.current || !restRef.current) return;
    const studyTime = +studyRef.current?.value * 60;
    const restTime = +restRef.current?.value * 60;
    // const studyTime = +studyRef.current?.value;
    // const restTime = +restRef.current?.value;
    localStorage.setItem("studyTime", studyTime + "");
    localStorage.setItem("restTime", restTime + "");
    localStorage.setItem("storageTime", studyTime * 4 + restTime * 3 + "");
    setTotalTime(studyTime * 4 + restTime * 3);
    setDefaultTiem({ studyTime, restTime });
    setIsSetting(false);
  };

  // 총시간과 디폴트 시간이 변경되었을 때 실행
  useEffect(() => {
    const { studyTime, restTime } = defaultTime;
    if (!studyTime || !restTime) return;
    const sumTime = studyTime + restTime;
    const cycle = ((totalTime + restTime) / sumTime) | 0;
    const remainTime = (totalTime + restTime) % sumTime || sumTime;
    cycleRef.current = cycle;
    if (totalTime <= 0) {
      setStudyState("집중타임");
      setTotalTime(studyTime * 4 + restTime * 3);
      setTime(studyTime);
      setIsRun(false);
      localStorage.removeItem("targetTime");
      localStorage.removeItem("stopTime");
      return;
    }
    if (cycle) {
      setTime(
        remainTime <= restTime
          ? remainTime % studyTime || restTime
          : (remainTime - restTime) % studyTime || studyTime
      );
      setStudyState(remainTime <= restTime ? "짧은휴식" : "집중타임");
    } else {
      setTime((remainTime - restTime) % studyTime || studyTime);
      setStudyState("집중타임");
    }
  }, [totalTime, defaultTime, studyState]);

  // 로컬에 저장된 시간을 불러와 run 상태였다면 실행. stop을 한번이라도 눌렀다면 목표 시간 - 스탑시간으로 계산한다.
  useEffect(() => {
    const targetTime = localStorage.getItem("targetTime");
    const runState = localStorage.getItem("isRun");
    const stopTime = localStorage.getItem("stopTime");
    if (!targetTime || !runState) return;
    if (Boolean(+runState)) setIsRun(true);
    if (!stopTime) return setTotalTime(((+targetTime - Date.now()) / 1000) | 0);
    setTotalTime(((+targetTime - +stopTime) / 1000) | 0);
  }, []);

  // 로컬에 저장된 집중 시간과 쉬는 시간을 불러와 state를 초기화 시킨다.
  useEffect(() => {
    const studyTime = localStorage.getItem("studyTime");
    const restTime = localStorage.getItem("restTime");
    if (!studyTime || !restTime) return;
    setDefaultTiem({ studyTime: +studyTime, restTime: +restTime });
  }, []);

  return (
    <>
      <div className="absolute flex w-full justify-end space-x-[1.3rem] p-[1.5rem] text-[1.4rem]">
        <button
          className="cursor-pointer text-[1.3rem] hover:text-gray-500"
          onClick={onClickReset}
        >
          <img src={ResetSvg} alt="리셋" className=" h-[2.2rem] w-[2.2rem]" />
        </button>
        <button
          className="cursor-pointer hover:text-gray-500"
          onClick={() => setIsSetting(true)}
        >
          <img src={SettingSvg} alt="설정" />
        </button>
      </div>

      <div className="flex-center h-full  w-full space-x-[7rem]">
        <div className="flex-center">
          <ProgressBar
            value={
              100 -
              (totalTime /
                (defaultTime.studyTime * 4 + defaultTime.restTime * 3)) *
                100
            }
          >
            <span className="absolute text-[3rem] text-primary-main ">
              {viewTime}
            </span>
          </ProgressBar>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="Cap2 text-primary-500 ">{studyState}</span>
          <ul className="mb-[2.1rem] mt-[2.4rem] flex space-x-[1.4rem]">
            {progressTimes.map((item, idx) => (
              <li
                key={idx}
                className={cls(
                  "h-[1.8rem] w-[1.8rem] rounded-full",
                  item <= totalTime ? "bg-[#D9D9D9]" : "bg-primary-main"
                )}
              />
            ))}
          </ul>
          <div className="flex w-full flex-col space-y-3">
            <button
              className="H3 w-full  rounded bg-primary-100 p-2 text-primary-500"
              onClick={onClickToggle}
            >
              {isRun ? "중지" : "시작"}
            </button>
          </div>
        </div>
      </div>
      {isSetting && (
        <div className="absolute top-0 flex h-full w-full flex-col items-center rounded-[1rem] bg-primary-sub3">
          <div className="absolute flex w-full justify-end p-[1.5rem]">
            <img
              src={CancelSvg}
              alt="cancel"
              className="h-[2.2rem] w-[2.2rem] cursor-pointer"
              onClick={() => setIsSetting(false)}
            />
          </div>
          <TimerForm
            onSubmit={onSubmit}
            studyRef={studyRef}
            restRef={restRef}
          />
        </div>
      )}
    </>
  );
};

export default Timer;

/*


*/

/*

*/
