import { Button } from "@/features/chat/ui/button";
import { getAllMessagesAction, postMessageAction } from "../actions";
import { Input } from "@/features/chat/ui/input";
import { GlobeIcon, SendIcon } from "lucide-react";

export function MessageInput() {
  return (
    <>
      <form
        className="flex w-full max-w-sm items-center space-x-2"
        action={postMessageAction}
      >
        <Input
          type="input"
          name="message"
          className="p-4"
          placeholder="Write your message"
        />
        <Button type="submit">
          <SendIcon />
        </Button>
      </form>
      <Button onClick={getAllMessagesAction}>
        <GlobeIcon />
      </Button>
    </>
  );
}
