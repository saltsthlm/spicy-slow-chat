import {
  chatFeature,
  MessageInput,
  ChatFeed,
  Card,
  CardTitle,
} from "@/features";

export default async function Home() {
  const messages = (await chatFeature.service.getAllMessages()).map(
    (message) => {
      return message.content;
    }
  );

  console.log(messages);
  return (
    <div>
      <Card className="text-center flex flex-col items-center m-auto mt-4 w-96">
        <CardTitle>Spicy Slow Chat</CardTitle>
        <ChatFeed messages={messages} />
        <MessageInput />
      </Card>
    </div>
  );
}
