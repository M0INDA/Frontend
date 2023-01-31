import SettingTime from "@components/studyRoom/home/Progress/SettingTime";
import { useCallback, useState } from "react";
import LineProgressBar from "./LineProgressBar";

const ProgressSection = () => {
  const [isSetting, setIsSetting] = useState(false);
  const onClickSetting = useCallback(() => {
    setIsSetting((prev) => !prev);
  }, []);
  return (
    <section className="relative rounded-[1rem] bg-bgColor-100">
      <LineProgressBar onClick={onClickSetting} />
      {isSetting && (
        <div className="absolute right-[3rem] top-[6rem] flex w-[30rem] flex-col space-y-[2.6rem] ">
          <SettingTime onClick={onClickSetting} />
        </div>
      )}
    </section>
  );
};

export default ProgressSection;
