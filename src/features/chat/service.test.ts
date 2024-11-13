import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { Message } from "./types";

function calculateCoolDown(latestFetchDate: bigint, messageTimestamp: bigint) {
  return messageTimestamp + BigInt(3600 * 1000) <= latestFetchDate;
}

async function getAllMessages(latestFetchDate: bigint, messages: Message[]) {
  return messages.map((message) =>
    calculateCoolDown(latestFetchDate, message.timestamp)
      ? message
      : { ...message, content: "Message is on cool down" }
  );
}

describe("Cool down:", () => {
  it("Works!", () => {});

  it("should return empty array when there are no messages | 0 case scenario", async () => {
    const filteredMessages = await getAllMessages(BigInt(Date.now()), []);
    deepEqual(filteredMessages, []);
  });

  it.skip("should return 1 message on cool down | 1 case scenario", () => {
    const messages = ([]) => [];
    deepEqual(messages([]), []);
  });

  it("should return 1 message after cool down | 1 case scenario", async () => {
    const latestFetchDate = BigInt(0);
    const messages: Message[] = [
      {
        username: "user3",
        content: "This message will not be on cooldown.",
        timestamp: latestFetchDate - BigInt(3600 * 1000),
      },
    ];
    const filteredMessages = await getAllMessages(latestFetchDate, messages);

    deepEqual(filteredMessages, messages);
  });
});
