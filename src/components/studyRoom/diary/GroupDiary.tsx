import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import DiarySearch from "./DiarySearch";
const GroupDiary = () => {
  return (
    <div className="flex min-w-[59.3rem] flex-col space-y-[2.6rem]">
      <DiarySearch />
      <div className="rounded-[1rem] bg-bgColor-100 py-[3rem]">
        <DiaryList />
        <DiaryForm />
      </div>
    </div>
  );
};

export default GroupDiary;
