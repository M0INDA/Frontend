import SmileSvg2 from "@assets/svg/Smile2Svg.svg";
const Chats = () => {
  return (
    <div className="flex h-full flex-col justify-between space-y-[2.4rem]">
      <div className="flex-1 bg-[#F7F6F6]"></div>
      <form className="flex items-center space-x-[1.3rem] px-[1.8rem]">
        <img src={SmileSvg2} alt="smile" className="w-[2.5rem]" />
        <input
          type="text"
          placeholder="메시지 작성하기..."
          className="flex-1 border-none p-[1rem] text-[1.3rem] font-medium shadow-[0px_2px_0px_#bababa] placeholder:text-primary-500  focus:ring-transparent"
        />
        <button className="flex-center h-full rounded-lg bg-primary-main px-[1rem] text-[1.3rem] text-primary-100">
          보내기
        </button>
      </form>
    </div>
  );
};

export default Chats;
