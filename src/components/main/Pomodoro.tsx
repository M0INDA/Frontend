import Timer from "@components/timer/Timer";

const Pomodoro = () => {
  return (
    <div className="mt-[7rem] flex flex-col">
      <h2 className="H2 mb-[1.8rem] text-primary-600">뽀모도로</h2>
      <div className="relative h-[21.8rem] w-[44.6rem] rounded-[1rem] bg-primary-sub3">
        <Timer />
      </div>
    </div>
  );
};

export default Pomodoro;
