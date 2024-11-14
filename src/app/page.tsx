import {
  chatFeature,
  MessageInput,
  ChatFeed,
  Card,
  CardTitle,
} from "@/features";
import { UserProfile } from "@/features/user/ui/user-profile";

export default async function Home() {
  const messages = await chatFeature.service.getAllMessages()

  return (
    <div>
      <UserProfile />
      <Card className="text-center flex flex-col items-center m-auto mt-4 w-96">
        <CardTitle>Spicy Slow Chat</CardTitle>
        <ChatFeed messages={messages} />
        <MessageInput />
      </Card>
    </div>
  );
}
