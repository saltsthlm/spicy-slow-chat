import { ChatFeed } from "@/features/chat/ui/chat-feed";
import { Button } from "@/features/chat/ui/button";
import { MessageInput } from "@/features/chat/ui/message-input";
import { FetchMessages } from "@/lib/data";

export default async function Home() {
  const messages = await FetchMessages();

  console.log(messages);
  return (
    <div>
      <ChatFeed messages={["hello", "world"]} />
      <Button>Send</Button>
      <MessageInput />
    </div>
  );
}
