import StudyRoomApi from "@apis/query/studyRoomApi";
import { useParams } from "react-router-dom";
import ChatSection from "./Chats/ChatSection";
import MemberSection from "./Members/MemberSection";
import StudyListSection from "./MyStudies/StudyListSection";
import ProgressSection from "./Progress/ProgressSection";

const GroupHome = () => {
  const { studyId } = useParams();
  const { data } = StudyRoomApi.ReadStudy(studyId + "");
  return (
    <div className="flex w-full  flex-col space-y-[2.6rem]">
      <StudyListSection />
      <ProgressSection />
      <div className="bg-slate- grid grid-cols-[3.58fr_5.34fr] gap-[2.6rem]">
        <MemberSection />
        <ChatSection />
      </div>
    </div>
  );
};

export default GroupHome;

// 8번줄 max-w-[59.3rem]
