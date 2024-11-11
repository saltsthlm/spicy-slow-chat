import { ChatFeed } from "@/components/chat-feed";
import { Button } from "@/components/ui/button";
import { MessageInput } from "@/components/ui/message-input";

export default function Home() {
  return (
    <div>
      <ChatFeed messages={["hello", "world"]} />
      <Button>Send</Button>
      <MessageInput />
    </div>
  );
}
