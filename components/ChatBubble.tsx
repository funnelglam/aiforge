"use client";

import {
  isValidElement,
  useState,
} from "react";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import "highlight.js/styles/github-dark.css";

type Props = {
  role: "user" | "assistant";
  text: string;
};

type CodeBlockProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function ChatBubble({
  role,
  text,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-4xl rounded-2xl px-6 py-5 shadow-sm ${
          isUser
            ? "bg-white text-black"
            : "bg-zinc-800 text-zinc-100"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap leading-7">
            {text}
          </p>
        ) : (
          <article
            className="
              prose prose-invert prose-zinc max-w-none
              prose-headings:mb-3
              prose-headings:mt-8
              prose-p:mb-5
              prose-p:leading-8
              prose-ul:my-5
              prose-ol:my-5
              prose-li:my-2
              prose-table:block
              prose-table:overflow-x-auto
              prose-pre:m-0
              prose-pre:bg-transparent
              prose-pre:p-0
              prose-code:text-violet-300
              prose-a:text-violet-400
              prose-strong:text-white
            "
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                pre({ children }) {
                  return (
                    <CodeBlock>
                      {children}
                    </CodeBlock>
                  );
                },

                code({
                  className,
                  children,
                  ...props
                }) {
                  const isBlock =
                    Boolean(className) ||
                    String(children).includes(
                      "\n"
                    );

                  if (isBlock) {
                    return (
                      <code
                        className={className}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <code
                      className="rounded bg-zinc-950 px-1.5 py-0.5 text-sm text-violet-300"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {text}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
}

function CodeBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  const [copied, setCopied] =
    useState(false);

  const code = extractText(children);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(
        code
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch (error) {
      console.error(
        "Could not copy code:",
        error
      );
    }
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">
        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Code
        </span>

        <button
          type="button"
          onClick={copyCode}
          className="rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>

      <pre className="overflow-x-auto p-4">
        {children}
      </pre>
    </div>
  );
}

function extractText(
  node: React.ReactNode
): string {
  if (
    typeof node === "string" ||
    typeof node === "number"
  ) {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node
      .map(extractText)
      .join("");
  }

  if (isValidElement<CodeBlockProps>(node)) {
    return extractText(
      node.props.children
    );
  }

  return "";
}