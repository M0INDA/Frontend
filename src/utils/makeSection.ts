import { IDiary } from "@allTypes/studyRoom";
import dayjs from "dayjs";

interface ISection {
  [key: string]: IDiary[];
}

export default function makeSection(diaryList: IDiary[]) {
  const sections: ISection = {};

  diaryList.forEach((diary) => {
    const monthDate = dayjs(diary.createdAt)
      .subtract(9, "hour")
      .format("YYYY.MM.DD");
    if (sections[monthDate]) {
      sections[monthDate].push(diary);
    } else {
      sections[monthDate] = [diary];
    }
  });
  return sections;
}
