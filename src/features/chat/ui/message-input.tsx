import { Button } from "@/features/chat/ui/button";
import { fetchAction, postMessageAction } from "../actions";
import { Input } from "@/features/chat/ui/input";
import { GlobeIcon, SendIcon } from "lucide-react";
import { Card } from "./card";

export function MessageInput() {
  return (
    <Card className="bg-secondary w-full flex items-center space-x-2 p-2 border-none shadow-none my-3">
      <form
        className="flex flex-grow items-center space-x-2"
        action={postMessageAction}
      >
        <Input
          type="input"
          name="message"
          className="flex-grow"
          placeholder="Write your message"
        />
        <Button variant="secondary" size="icon" type="submit">
          <SendIcon />
        </Button>
      </form>
      <Button variant="secondary" size="icon" onClick={fetchAction}>
        <GlobeIcon />
      </Button>
    </Card>
  );
}
