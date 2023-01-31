import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

const ChatSection = () => {
  return (
    <section className="flex min-h-[62rem] flex-col rounded-[1rem] bg-bgColor-100 p-[3rem]">
      <h2 className="H2 mb-[1.8rem]">전체 채팅</h2>
      <div className="flex h-full flex-col justify-between space-y-[2.4rem]">
        <ChatList />
        <ChatForm />
      </div>
    </section>
  );
};

export default ChatSection;
