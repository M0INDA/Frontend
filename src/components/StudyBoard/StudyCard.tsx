import { IStudyProps } from "@allTypes/props";
import Icon6 from "@assets/icons/Icon6.svg";
import getIcon from "@utils/getIcon";

const StudyCard = ({ data }: IStudyProps) => {
  return (
    <>
      {data?.map((newStudy) => (
        <div
          key={newStudy.id}
          className="h-[27.6rem] w-[32.8rem] rounded-[1.4rem] bg-[#F4F4F4] px-[3rem] pt-[2.8rem]"
        >
          <p className="Cap4 text-primary-500">
            스터디 시작일 &nbsp; | &nbsp; {newStudy.startDate}
          </p>
          <p className="H3 mt-[2.2rem]">{newStudy.title}</p>
          <p className="Cap1 text-primary-500">{newStudy.content}</p>
          <img
            src={getIcon(newStudy.icon)}
            alt="studyIcon"
            className="mt-[3.4rem] h-[5.8rem] w-[5.8rem]"
          />
          <div className="Cap4 mt-[2rem] flex justify-between text-primary-main">
            <span>{newStudy.userId}</span>
            <div>
              <span>조회 {newStudy.views}</span>
              <span className="ml-[1.4rem]">댓글</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StudyCard;
