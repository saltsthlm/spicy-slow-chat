export function ChatFeed({ messages }: { messages: string[] }) {
  return messages.map((message, index) => {
    return (
      <div
        className="bg-primary text-primary-foreground rounded-lg px-3 py-1 text-sm my-2 "
        key={index}
      >
        {message}
      </div>
    );
  });
}
