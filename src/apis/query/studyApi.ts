import { instance } from "@apis/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/** 새로 생긴 스터디 그룹 조회 */
const NewStudyGroup = () => {
  return useQuery(
    ["newStudy"],
    async () => {
      const { data } = await instance.get(`/main/newstudy`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 카테고리 별 인기 스터디 조회 */
const CateBestStudy = (cateName: string) => {
  return useQuery(
    ["mainBestStudy", cateName],
    async () => {
      const { data } = await instance.get(
        `/main/beststudy?category=${cateName}`
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 참여 중인 스터디 그룹 조회 */
const JoinStudyGroup = () => {
  return useQuery(
    ["joinStudy"],
    async () => {
      const { data } = await instance.get(`/main/myStudy`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

const StudyApi = {
  NewStudyGroup,
  CateBestStudy,
  JoinStudyGroup,
};
export default StudyApi;
