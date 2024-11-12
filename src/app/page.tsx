import { ChatFeed } from "@/features/chat/ui/chat-feed";
import { Button } from "@/features/chat/ui/button";
import { MessageInput } from "@/features/chat/ui/message-input";
import { chatFeature } from "@/features/chat/instance";

export default async function Home() {
  const messages = (await chatFeature.service.getAllMessages()).map(
    (message) => {
      return message.content;
    }
  );

  console.log(messages);
  return (
    <div>
      <ChatFeed messages={messages} />
      <Button>Send</Button>
      <MessageInput />
    </div>
  );
}
