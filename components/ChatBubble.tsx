type Props = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatBubble({ role, text }: Props) {
  return (
    <div
      className={`max-w-3xl rounded-xl p-4 whitespace-pre-wrap ${
        role === "user"
          ? "bg-white text-black self-end"
          : "bg-zinc-800 self-start"
      }`}
    >
      {text}
    </div>
  );
}