import StudyCheck from "@components/main/StudyCheck";

const Status = () => {
  const users = [
    { work: "완료", num: 1 },
    { work: "참여중", num: 2 },
    { work: "개설", num: 3 },
  ];
  return (
    <div className="mt-[3.8rem] h-[26.5rem] w-[44.6rem] gap-[1.4rem] rounded-[1rem] bg-white px-[3rem] py-[2.4rem]">
      <h2 className="H2 my-[1.8rem]">스터디 현황</h2>
      <div className="flex justify-between">
        {users.map((user) => (
          <div className="flex-center h-[6.4rem] w-[12.3rem] flex-col rounded-[1rem] bg-[#F5F4F3]">
            <p className="H3">{user.num}</p>
            <p className="text-primary-500 ">{user.work}</p>
          </div>
        ))}
      </div>
      <StudyCheck now={"mypage"} />
    </div>
  );
};

export default Status;
