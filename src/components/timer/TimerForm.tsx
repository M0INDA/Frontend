interface ITimer {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  studyRef: React.RefObject<HTMLInputElement>;
  restRef: React.RefObject<HTMLInputElement>;
}

const TimerForm = ({ onSubmit, studyRef, restRef }: ITimer) => {
  return (
    <form
      className="flex  h-full w-3/4 flex-col items-center justify-center space-y-3"
      onSubmit={onSubmit}
    >
      <input
        type="number"
        placeholder="집중시간 ex) 25분"
        required
        ref={studyRef}
        className="w-[20rem] rounded-lg border border-primary-400 px-3 py-4  text-[1.2rem]"
      />
      <input
        type="number"
        placeholder="쉬는시간 ex) 5분"
        required
        ref={restRef}
        className="w-[20rem] rounded-lg border border-primary-400 px-3 py-4  text-[1.2rem]"
      />
      <button className="w-[20rem] cursor-pointer rounded-lg bg-primary-main p-3  py-4 text-[1.3rem] text-primary-100 hover:bg-primary-sub1">
        세팅
      </button>
    </form>
  );
};

export default TimerForm;
