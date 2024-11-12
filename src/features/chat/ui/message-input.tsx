import { Button } from "@/features/chat/ui/button";
import { postMessageAction } from "../actions";

export function MessageInput() {
  return (
    <form action={postMessageAction}>
      <input
        type="input"
        name="message"
        className="p-4"
        placeholder="Write your message"
      />
      <Button type="submit">Send</Button>
    </form>
  );
}
