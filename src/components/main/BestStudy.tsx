import { useNavigate } from "react-router-dom";

const BestStudy = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[5.4rem] ">
      <div className="flex justify-between">
        <h2 className="H2 mb-[1.8rem] text-primary-600">
          카테고리 별 인기스터디
        </h2>
        <button
          onClick={() => navigate("/study")}
          className="Cap1 text-primary-500"
        >
          더보기
        </button>
      </div>
      <div className="flex h-[8.6rem] w-[65.6rem] justify-between rounded-[1rem] bg-orange-100 px-[3rem]">
        <div className="flex-center">
          <div className="mr-[2rem] h-[3.6rem] w-[3.6rem] rounded-full bg-primary-400" />
          <div>
            <p className="Sub1 text-primary-600">모인다 스터디</p>
            <p className="Cap4 text-primary-500">
              4주 동안 같이 공부 할 백엔드 스터디 모집합니다.
            </p>
          </div>
        </div>
        <div className="Cap3 flex flex-col items-end justify-center">
          <p className="text-primary-500">모집마감</p>
          <p className="text-primary-main ">D-2</p>
        </div>
      </div>
    </div>
  );
};

export default BestStudy;
