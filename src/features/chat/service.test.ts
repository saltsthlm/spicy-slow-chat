import { deepEqual, equal } from "node:assert/strict";
import { describe, it } from "node:test";
import { Message } from "./types";
const oneHour = 3600000;
const latestFetchDate = BigInt(0);
const messageAfterCoolDown = {
  username: "user3",
  content: "This message will NOT be on cool down.",
  timestamp: latestFetchDate - BigInt(oneHour),
};
const messageOnCoolDown = {
  username: "user3",
  content: "Message will be ON cool down",
  timestamp: latestFetchDate - BigInt(oneHour / 2),
};

function calculateCoolDown(latestFetchDate: bigint, messageTimestamp: bigint) {
  return messageTimestamp + BigInt(oneHour) <= latestFetchDate;
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

  it("should return 1 message after cool down | 1 case scenario", async () => {
    const messages: Message[] = [messageAfterCoolDown];
    const filteredMessages = await getAllMessages(latestFetchDate, messages);

    deepEqual(filteredMessages, messages);
  });

  it("should return 1 message on cool down | 1 case scenario", async () => {
    const message: Message = messageOnCoolDown;

    const mutatedMessage = { ...message, content: "Message is on cool down" };

    const filteredMessages = await getAllMessages(latestFetchDate, messages);

    equal(filteredMessages, mutatedMessage);
  });
});
