import {
  chatFeature,
  MessageInput,
  ChatFeed,
  Card,
  CardTitle,
  CardHeader,
} from "@/features";
import { UserProfile } from "@/features/user/ui/user-profile";
import { Main } from "../ui/pages/main";
import { ReactNode } from "react";
const messages = await chatFeature.service.getAllMessages();
export default async function Chat() {
  const numberOfTokens = await chatFeature.service.getUserTokens("John Wick");

  return (
    <Main>
      <UserProfile />
      <SpicyCard>
        <CardHeader>You have {numberOfTokens} fetch tokens.</CardHeader>
        <CardTitle className="w-full">
          <h2 className="scroll-m-20 border-b text-md font-normal tracking-normal first:mt-0 pt-4 pb-3 w-full">
            Spicy Members
          </h2>
        </CardTitle>
        <ChatFeedMessages />
        <MessageInput />
      </SpicyCard>
    </Main>
  );
}

type Props = {
  children: ReactNode;
};
function SpicyCard({ children }: Props) {
  return (
    <Card className="flex flex-col items-center m-auto px-6 w-full max-h-full overflow-y-auto flex-grow">
      {children}
    </Card>
  );
}

function ChatFeedMessages() {
  return (
    <div className="flex-grow w-full overflow-y-auto">
      <ChatFeed messages={messages} />
    </div>
  );
}
