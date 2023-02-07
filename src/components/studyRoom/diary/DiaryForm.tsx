import { useCallback, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DiaryForm = () => {
  const [value, setValue] = useState("");

  // 텍스트 전송
  const handleOnSubmit = useCallback(() => {
    // 텍스트 전송 구현
    setValue("");
  }, []);

  // enter는 전송, shift + enter는 줄바꿈
  const pressEnter = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && e.shiftKey) {
        return;
      } else if (e.key === "Enter") {
        // [Enter] 치면 메시지 보내기
        handleOnSubmit();
      }
    },
    [handleOnSubmit]
  );

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["image"],
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
        onKeyDown={pressEnter}
      />
      <div className="z-10 flex items-center justify-between px-[1rem]">
        <div>
          <button>아이콘</button>
        </div>
        <button
          onClick={handleOnSubmit}
          className="Cap3  cursor-pointer rounded-[1rem] bg-primary-main p-[0.7rem_1.5rem] text-primary-100"
        >
          보내기
        </button>
      </div>
    </div>
  );
};

export default DiaryForm;
