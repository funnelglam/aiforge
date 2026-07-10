import ChatBubble from "./ChatBubble";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWindow({
  messages,
}: {
  messages: Message[];
}) {
  return (
    <div className="flex flex-col gap-6 p-8 overflow-y-auto flex-1">

      {messages.map((message, index) => (
        <ChatBubble
          key={index}
          role={message.role}
          text={message.text}
        />
      ))}

    </div>
  );
}