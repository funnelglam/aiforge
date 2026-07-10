export type Message = {
  role: "user" | "assistant";
  text: string;
};

export type Chat = {
  id: string;
  title: string;
  messages: Message[];
};