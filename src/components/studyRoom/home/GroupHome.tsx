import ChatSection from "./Chats/ChatSection";
import MemberSection from "./Members/MemberSection";
import StudiesSection from "./MyStudies/StudiesSection";
import ProgressSection from "./Progress/ProgressSection";

const GroupHome = () => {
  return (
    <>
      <StudiesSection />
      <ProgressSection />
      <div className="bg-slate- grid grid-cols-[3.58fr_5.34fr] gap-[2.6rem]">
        <MemberSection />
        <ChatSection />
      </div>
    </>
  );
};

export default GroupHome;
