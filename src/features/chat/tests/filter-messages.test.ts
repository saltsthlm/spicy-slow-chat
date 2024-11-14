import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { MessageSelect } from "../types";

describe("Fetches filter", () => {
  it("should return empty array when input messages are empty | 0 case", async () => {
    const messages: MessageSelect[] = [];
    const latestFetchDate = BigInt(
      new Date("Novemver 11, 2024 00:00:00").getTime(),
    );
    const user = "John Wick";

    const filteredMessages = getMessagesByDateAndUser(
      messages,
      latestFetchDate,
      user,
    );

    deepEqual(filteredMessages, []);
  });
});

function getMessagesByDateAndUser(
  messages: MessageSelect[],
  latestFetchDate: bigint,
  user: string,
): MessageSelect[] {
  return [];
}
