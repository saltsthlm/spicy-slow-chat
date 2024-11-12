import { ChatFeed } from "@/components/chat-feed";
import { Button } from "@/components/ui/button";
import { MessageInput } from "@/components/ui/message-input";
import { FetchMessages } from "@/lib/data";

export default async function Home() {

  const messages = await FetchMessages()

  console.log(messages)
  return (
    <div>
      <ChatFeed messages={["hello", "world"]} />
      <Button>Send</Button>
      <MessageInput />

    </div>
  );
}
