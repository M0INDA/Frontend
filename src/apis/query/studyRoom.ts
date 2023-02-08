import { IStudyRoom, ITargetTime } from "@allTypes/studyRoom";
import { instance } from "@apis/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

/** 본인이 속한 스터디 그룹들을 조회 */
const ReadStudyList = (studyId: string) => {
  return useQuery<IStudyRoom[]>(
    ["studyList"],
    async () => {
      const { data } = await instance.get(`study/${studyId}/room/studyList`);
      return data;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
};

/** 그룹의 목표 시간을 설정   */
const SetGroupTargetTime = ({ studyId, hours, minutes }: ITargetTime) => {
  return useMutation(async () => {
    const response = await instance.post(`/study/${studyId}/room/targetTime`, {
      hours,
      minutes,
    });
    return response;
  });
};

const StudyRoomApi = {
  ReadStudyList,
  SetGroupTargetTime,
};
export default StudyRoomApi;
