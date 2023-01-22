const StudyBar = () => {
  return (
    <div className="h-[23.4rem] w-[91.7rem] rounded-[1rem] bg-white pt-[3rem] text-primary-600">
      <div className="ml-[3rem] flex justify-between pr-[5.3rem]">
        <span className="H2 ">내 스터디 시간</span>
        <button className="Sub2 ">설정</button>
      </div>
      <div className="mt-[2.6rem] flex">
        <div className="ml-[5.9rem]">
          <p className="Sub2">오늘 공부한 시간</p>
          <p className="H2 mt-[0.9rem] ml-[0.3rem]">2h 42m</p>
        </div>
        <div className="ml-[4.1rem]">
          <p className="Sub2">목표시간</p>
          <p className="H2 mt-[0.9rem] ml-[0.3rem]">8h 30m</p>
        </div>
      </div>
      <div className="ml-[5.2rem] mt-[2rem] h-[2rem] w-[81.1rem] rounded-[2.1rem] bg-primary-200" />
    </div>
  );
};

export default StudyBar;
