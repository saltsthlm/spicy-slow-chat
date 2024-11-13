import { chatFeature, MessageInput, ChatFeed, Card } from "@/features";

export default async function Home() {
  const messages = (await chatFeature.service.getAllMessages()).map(
    (message) => {
      return message.content;
    }
  );

  console.log(messages);
  return (
    <div>
      <Card>
        <ChatFeed messages={messages} />
      </Card>
      <MessageInput />
    </div>
  );
}
