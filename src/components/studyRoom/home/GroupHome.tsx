import ChatSection from "./Chats/ChatSection";
import MemberSection from "./Members/MemberSection";
import StudiesSection from "./MyStudies/StudiesSection";
import ProgressSection from "./Progress/ProgressSection";

const GroupHome = () => {
  return (
    <div className="flex min-w-[59.3rem] flex-col space-y-[2.6rem]">
      <StudiesSection />
      <ProgressSection />
      <div className="bg-slate- grid grid-cols-[3.58fr_5.34fr] gap-[2.6rem]">
        <MemberSection />
        <ChatSection />
      </div>
    </div>
  );
};

export default GroupHome;
