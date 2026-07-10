"use client";

import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import PromptBox from "../components/PromptBox";

import { Chat } from "@/types/chat";

export default function Dashboard() {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: crypto.randomUUID(),
      title: "New Chat",
      messages: [
        {
          role: "assistant",
          text: "👋 Welcome to AIForge!",
        },
      ],
    },
  ]);

  const [activeChat, setActiveChat] = useState(chats[0].id);

  const currentChat = chats.find(c => c.id === activeChat)!;

  function sendMessage(prompt: string) {
    setChats(prev =>
      prev.map(chat => {
        if (chat.id !== activeChat) return chat;

        return {
          ...chat,
          title:
            chat.title === "New Chat"
              ? prompt.slice(0, 30)
              : chat.title,

          messages: [
            ...chat.messages,
            {
              role: "user",
              text: prompt,
            },
            {
              role: "assistant",
              text:
                "🤖 Mock AI: We'll replace this with GPT-5 later.",
            },
          ],
        };
      })
    );
  }

  function createChat() {
    const newChat: Chat = {
      id: crypto.randomUUID(),
      title: "New Chat",
      messages: [
        {
          role: "assistant",
          text: "👋 New conversation started.",
        },
      ],
    };

    setChats(prev => [...prev, newChat]);
    setActiveChat(newChat.id);
  }

  return (
    <main className="h-screen bg-black text-white flex flex-col">

      <Header />

      <div className="flex flex-1 overflow-hidden">

        <Sidebar
          chats={chats}
          activeChat={activeChat}
          onSelect={setActiveChat}
          onNewChat={createChat}
        />

        <div className="flex flex-col flex-1">

          <ChatWindow messages={currentChat.messages} />

          <PromptBox onSend={sendMessage} />

        </div>

      </div>

    </main>
  );
}