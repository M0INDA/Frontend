import { IDiary, IMyStudy, ITargetTime } from "@allTypes/studyRoom";
import { instance } from "@apis/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/** 스터디룸 조회 */
const ReadStudy = (studyId: string) => {
  return useQuery<IMyStudy>(
    ["myStudy", studyId],
    async () => {
      const { data } = await instance.get(`study/${studyId}/room`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 본인이 속한 스터디 그룹들을 조회 */
const ReadStudyList = () => {
  return useQuery<IMyStudy[]>(
    ["myStudyList"],
    async () => {
      const { data } = await instance.get(`main/myStudy`);
      return data;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
};

/** 스터디룸 스터디원 출석 조회 */
const ReadMemberList = (studyId: string) => {
  return useQuery(
    ["members", studyId],
    async () => {
      const { data } = await instance.get(
        `/study/${studyId}/room/memberStatus`
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 그룹의 목표 시간을 설정   */
const SetGroupTargetTime = ({ studyId, targetTime }: ITargetTime) => {
  return useMutation(async () => {
    const response = await instance.post(`/study/${studyId}/room/targetTime`, {
      targetTime,
    });
    return response;
  });
};

/** 스터디 상태 변경 */
const UpdateStudyStatus = (studyId: string) => {
  return useMutation(async ({ studyStatus }: IMyStudy) => {
    const response = await instance.put(`/study/${studyId}/studyStatus`, {
      studyStatus,
    });
    return response;
  });
};

/** 스터디 일지 조회 */
const ReadDiaryList = (studyId: string, page: number) => {
  return useQuery(
    ["diaryList", studyId],
    async () => {
      const resposne = await instance.get(
        `/study/${studyId}/diary?take=15&page=${page}`,
        {}
      );
      return resposne;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 스터디 일지 작성 */
const AddDiary = (studyId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (newDiary: IDiary) => {
      const response = await instance.post(`/study/${studyId}/diary`, newDiary);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["diaryList", studyId]),
      onError: () => alert("글 작성 실패"),
    }
  );
};

/** 스터디 일지 수정 */
const UpdateDiary = (studyId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (newDiary: IDiary) => {
      const response = await instance.put(
        `/study/${studyId}/diary/${newDiary.id}`,
        newDiary
      );
      return response;
    },
    {
      onMutate: async (newDiary) => {
        // 쿼리 get 요청 취소 (이전 데이터가 업데이트 데이터 덮어쓰기를 방지)
        await queryClient.cancelQueries(["diaryList", studyId]);
        // 이전 값 저장
        const prevDiaryList: IDiary[] =
          queryClient.getQueryData(["diaryList", studyId]) || [];
        // 낙관적 업데이트
        queryClient.setQueryData(["diaryList", studyId], () =>
          prevDiaryList?.map((diary) =>
            diary.id === newDiary.id ? { ...diary, ...newDiary } : diary
          )
        );
        return { prevDiaryList };
      },
      // 에러 발생 시 롤백
      onError: (error, newDiary, context) => {
        if (context?.prevDiaryList) {
          queryClient.setQueryData(
            ["diaryList", studyId],
            context.prevDiaryList
          );
        }
      },
      onSettled: () => {
        // 요청 성공 여부와 상관없이 쿼리를 무효화해 최신 데이터를 받아오도록 한다.
        queryClient.invalidateQueries(["diaryList", studyId]);
      },
    }
  );
};

/** 스터디 일지 삭제 */
const RemoveDiary = (studyId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (diaryId: string) => {
      const response = await instance.delete(
        `/study/${studyId}/diary/${diaryId}`
      );
      return response;
    },
    {
      onMutate: async (diaryId: string) => {
        await queryClient.cancelQueries(["diaryList", studyId]);
        const prevDiaryList: IDiary[] =
          queryClient.getQueryData(["diaryList", studyId]) || [];
        queryClient.setQueryData(
          ["diaryList", studyId],
          prevDiaryList.filter((diary) => diary.id !== diaryId)
        );
        return { prevDiaryList };
      },
      onError: (__, _, context) => {
        if (context?.prevDiaryList) {
          queryClient.setQueryData(
            ["diaryList", studyId],
            context.prevDiaryList
          );
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(["diaryList", studyId]);
      },
    }
  );
};

const StudyRoomApi = {
  ReadStudyList,
  SetGroupTargetTime,
  ReadStudy,
  ReadMemberList,
  UpdateStudyStatus,
  ReadDiaryList,
  AddDiary,
  UpdateDiary,
  RemoveDiary,
};
export default StudyRoomApi;
