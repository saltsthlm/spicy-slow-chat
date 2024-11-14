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
    <div className="h-screen max-w-screen-sm m-auto flex flex-col items-center">
      <UserProfile />

      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Spicy Slow Chat
      </h1>

      <Card className="flex flex-col items-center m-auto px-6 w-full max-h-full overflow-y-auto flex-grow">
        <CardTitle className="w-full">
          <h2 className="scroll-m-20 border-b text-md font-normal tracking-normal first:mt-0 pt-4 pb-3 w-full">
            Spicy Members
          </h2>
        </CardTitle>
        <ChatFeed messages={messages} />
        <MessageInput />
      </Card>
    </div>
  );
}
