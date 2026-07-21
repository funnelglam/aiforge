"use client";

import {
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  onSend: (text: string) => void;
  disabled?: boolean;
};

export default function PromptBox({
  onSend,
  disabled = false,
}: Props) {
  const [prompt, setPrompt] =
    useState("");

  const textareaRef =
    useRef<HTMLTextAreaElement | null>(
      null
    );

  const canSend =
    prompt.trim().length > 0 &&
    !disabled;

  useEffect(() => {
    const textarea =
      textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";

    textarea.style.height = `${Math.min(
      textarea.scrollHeight,
      200
    )}px`;
  }, [prompt]);

  function submit() {
    const cleanPrompt =
      prompt.trim();

    if (!cleanPrompt || disabled) {
      return;
    }

    onSend(cleanPrompt);
    setPrompt("");

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      submit();
    }
  }

  return (
    <div className="border-t border-zinc-800 bg-zinc-950 p-4 md:p-5">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-3 shadow-lg focus-within:border-violet-500">
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(event) =>
              setPrompt(
                event.target.value
              )
            }
            onKeyDown={handleKeyDown}
            disabled={disabled}
            rows={1}
            placeholder={
              disabled
                ? "AIForge is thinking..."
                : "Message AIForge..."
            }
            className="max-h-[200px] min-h-[52px] w-full resize-none bg-transparent px-2 py-3 leading-7 text-white outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-60"
          />

          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="hidden text-xs text-zinc-500 sm:block">
              Enter to send · Shift +
              Enter for a new line
            </p>

            <button
              type="button"
              onClick={submit}
              disabled={!canSend}
              className="ml-auto rounded-xl bg-white px-5 py-2.5 font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {disabled
                ? "Thinking..."
                : "Send ↑"}
            </button>
          </div>
        </div>

        <p className="mt-2 text-center text-xs text-zinc-600">
          AIForge may make mistakes.
          Review important information.
        </p>
      </div>
    </div>
  );
}