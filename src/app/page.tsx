import {
  chatFeature,
  MessageInput,
  ChatFeed,
  Card,
  CardTitle,
  CardHeader,
} from "@/features";
import { UserProfile } from "@/features/user/ui/user-profile";

export default async function Home() {
  const messages = await chatFeature.service.getAllMessages();
  const numberOfTokens = await chatFeature.service.getUserTokens("John Wick");

  return (
    <div className="h-screen max-w-screen-sm m-auto flex flex-col items-center py-4">
      <UserProfile />
      <Card className="flex flex-col items-center m-auto px-6 w-full max-h-full overflow-y-auto flex-grow">
        <CardHeader>You have {numberOfTokens} fetch tokens.</CardHeader>
        <CardTitle className="w-full">
          <h2 className="scroll-m-20 border-b text-md font-normal tracking-normal first:mt-0 pt-4 pb-3 w-full">
            Spicy Members
          </h2>
        </CardTitle>
        <div className="flex-grow w-full overflow-y-auto">
          <ChatFeed messages={messages} />
        </div>
        <div className="w-full"></div>
        <MessageInput />
      </Card>
    </div>
  );
}
