import StudyApi from "@apis/query/studyApi";
import StudyCard from "@components/StudyBoard/StudyCard";
import { useNavigate } from "react-router-dom";

const NewStudy = () => {
  const navigate = useNavigate();
  const { data } = StudyApi.NewStudyGroup();
  console.log(data);

  return (
    <div className="mt-[7.2rem]">
      <div className="flex justify-between">
        <h2 className="H2 mb-[1.8rem] text-primary-600">
          새로 생긴 스터디그룹
        </h2>
        <button
          onClick={() => navigate("/study")}
          className="Cap1 text-primary-500"
        >
          더보기
        </button>
      </div>
      <div className=" grid h-[88.0] w-[68.3] grid-cols-2 gap-[2.6rem] ">
        <StudyCard />
        <StudyCard />
        <StudyCard />
      </div>
    </div>
  );
};

export default NewStudy;
