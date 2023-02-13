import { IOpenStudy } from "@allTypes/study";
import { instance } from "@apis/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddStudy = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (newStudy: IOpenStudy) => {
      const response = await instance.post(`/study/produce`, newStudy);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["studylist"]),
      onError: () => alert("모집글 작성 실패"),
    }
  );
};

const StudyApi = {
  AddStudy,
};

export default StudyApi;
