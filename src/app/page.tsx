import { ChatFeed } from "@/components/chat-feed";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <ChatFeed messages={["hello", "world"]} />
      <Button>Click me</Button>
    </div>
  );
}
