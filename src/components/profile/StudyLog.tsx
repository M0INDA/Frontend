const StudyLog = () => {
  return (
    <div className="ml-[2.6rem]  h-[58.4rem] w-[32.8rem] rounded-[1rem] bg-white p-[3rem]">
      <p className="H2 text-primary-600">최근 공부 기록</p>
      <div className="Sub2 mt-[1.8rem] flex flex-row text-primary-500">
        <div className="ml-[0.4rem] h-[2.4rem] w-[2.6rem]">No.</div>
        <div className="ml-[2.4rem] h-[2.4rem] w-[8.9rem]">날짜</div>
        <div className="ml-[2.4rem] h-[2.4rem] w-[6.3rem]">공부 시간</div>
      </div>
      <div className="Cap4 flex flex-row border-b border-[#D7D7D7] py-[2.3rem] text-primary-600">
        <div className="ml-[1rem] h-[2.2rem] w-[2.4rem]">1</div>
        <div className="ml-[2rem] h-[2.2rem] w-[9.4rem]">2023.01.31</div>
        <div className="ml-[2rem] h-[2.2rem] w-[7rem]">03:12:00</div>
      </div>
    </div>
  );
};

export default StudyLog;
