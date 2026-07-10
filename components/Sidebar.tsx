import { Chat } from "@/types/chat";

type Props = {
  chats: Chat[];
  activeChat: string;
  onSelect: (id: string) => void;
  onNewChat: () => void;
};

export default function Sidebar({
  chats,
  activeChat,
  onSelect,
  onNewChat,
}: Props) {
  return (
    <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-5">

      <button
        onClick={onNewChat}
        className="w-full rounded-xl bg-white text-black py-3 font-semibold"
      >
        + New Chat
      </button>

      <div className="mt-8 space-y-2">

        {chats.map(chat => (

          <button
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={`w-full text-left rounded-lg p-3 transition ${
              activeChat === chat.id
                ? "bg-zinc-700"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {chat.title}
          </button>

        ))}

      </div>

    </aside>
  );
}