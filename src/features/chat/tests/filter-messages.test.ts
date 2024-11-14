import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { MessageSelect } from "../types";
import { USER_MESSAGES } from "./test-data";

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

  it("should return only 3 messages where timestamp <= latest fetchdate | many case", async () => {
    const messages: MessageSelect[] = USER_MESSAGES;

    const latestFetchDate = BigInt(1699890100000);
    const user = "John Wick";

    const filteredMessages = getMessagesByDateAndUser(
      messages,
      latestFetchDate,
      user,
    );

    deepEqual(filteredMessages, messages.slice(0, 3));
  });
});

function getMessagesByDateAndUser(
  messages: MessageSelect[],
  latestFetchDate: bigint,
  user: string,
): MessageSelect[] {
  return messages.filter((message) => message.timestamp <= latestFetchDate);
}
