"use client";

import {
  useEffect,
  useRef,
} from "react";

import ChatBubble from "./ChatBubble";

type Message = {
  role: "user" | "assistant";
  text: string;
};

type Props = {
  messages: Message[];
  loading?: boolean;
};

export default function ChatWindow({
  messages,
  loading = false,
}: Props) {
  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-8 md:px-8">
      {messages.length === 0 &&
        !loading && (
          <div className="flex flex-1 items-center justify-center">
            <div className="max-w-xl text-center">
              <div className="text-5xl">
                🧠
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                What can AIForge create
                for you?
              </h2>

              <p className="mt-3 leading-7 text-zinc-400">
                Ask a question, create a
                project, refine an idea, or
                continue an existing task.
              </p>
            </div>
          </div>
        )}

      {messages.map(
        (message, index) => (
          <ChatBubble
            key={`${message.role}-${index}`}
            role={message.role}
            text={message.text}
          />
        )
      )}

      {loading && <TypingIndicator />}

      <div
        ref={bottomRef}
        aria-hidden="true"
      />
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex w-full justify-start">
      <div className="rounded-2xl bg-zinc-800 px-6 py-5 text-zinc-100 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-zinc-300">
            AIForge is thinking
          </span>

          <div className="flex items-center gap-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.3s]" />

            <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.15s]" />

            <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400" />
          </div>
        </div>
      </div>
    </div>
  );
}