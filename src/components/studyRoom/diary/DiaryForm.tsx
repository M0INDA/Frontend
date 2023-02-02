import { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DiaryForm = () => {
  const [value, setValue] = useState("");
  const handleOnClick = () => console.log("hello");

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image", "video"],
        ],
      },
    }),
    []
  );

  return (
    <div className="relative flex flex-col justify-end  bg-bgColor-100 px-[3rem] ">
      <ReactQuill
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <div className="z-10 flex items-center justify-between px-[1rem]">
        <div>
          <button>아이콘</button>
        </div>
        <button
          onClick={handleOnClick}
          className="Cap3  cursor-pointer rounded-[1rem] bg-primary-main p-[0.7rem_1.5rem] text-primary-100"
        >
          보내기
        </button>
      </div>
    </div>
  );
};

export default DiaryForm;
