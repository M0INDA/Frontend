import { IDiary } from "@allTypes/myStudy";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
interface IDiaryItem {
  diary: IDiary;
}

const DiaryItem = ({ diary }: IDiaryItem) => {
  return (
    <li className="flex space-x-[1rem]">
      <div className="h-[4.3rem] w-[4.3rem] rounded-full bg-primary-400" />
      <div className="flex flex-1 flex-col">
        <div className="flex items-center space-x-[1rem]">
          <strong className="Cap2">{diary.userId}</strong>
          <span className="Cap4 text-primary-500">
            {dayjs(diary.createdAt).format("A HH:mm")}
          </span>
        </div>
        <p className="text-[1.6rem]">{diary.content}</p>
      </div>
    </li>
  );
};

export default DiaryItem;
