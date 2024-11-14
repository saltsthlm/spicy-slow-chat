import { Button } from "@/features/chat/ui/button";
import { postMessageAction } from "../actions";
import { Input } from "@/features/chat/ui/input";

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
        <Button type="submit">Send</Button>
      </form>
      <Button onClick={fetchMessagesAction}></Button>
    </>
  );
}
