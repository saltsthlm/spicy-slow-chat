import { MessageSelect } from "../types";

export function ChatFeed({ messages }: { messages: MessageSelect[] }) {
  return (
    <div className="flex flex-col w-full overflow-y-auto pr-4">
      {messages.map((message) => {
        if (message.username === "John Wick") {
          return (
            <div
              className="bg-primary text-primary-foreground rounded-lg px-3 py-1 text-sm my-1 self-end"
              key={message.timestamp}
            >
            <p>{message.content}</p>

            </div>
          );
        }

        return (
          <div
            className="bg-secondary text-primary rounded-lg px-3 py-1 text-sm my-1 self-start"
            key={message.timestamp}
          >
            <p className="text-sm text-start text-muted-foreground">{message.username}</p>
            <p>{message.content}</p>
          </div>
        );
      })}
    </div>
  );
}
