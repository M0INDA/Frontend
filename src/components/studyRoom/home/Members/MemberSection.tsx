import MemberList from "./MemberList";

const MemberSection = () => {
  return (
    <section className="flex min-h-[62rem] flex-col rounded-[1rem] bg-bgColor-100 p-[3rem]">
      <h2 className="H2 mb-[1.8rem]">스터디원 현황</h2>
      <MemberList />
    </section>
  );
};

export default MemberSection;
