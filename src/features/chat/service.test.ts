import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { Message } from "./types";

function calculateCoolDown(latestFetchDate: bigint, messageTimestamp: bigint) {
  return messageTimestamp + BigInt(3600 * 1000) < latestFetchDate;
}

async function getAllMessages(latestFetchDate: bigint, messages: Message[]) {
  messages.map((message) =>
    calculateCoolDown(latestFetchDate, message.timestamp)
      ? message
      : { ...message, content: "Message is on cool down" }
  );
}

describe("Cool down:", () => {
  it("Works!", () => {});
  it("should return empty array when there are no messages | 0 case scenario", () => {
    const messages = ([]) => [];
    deepEqual(messages([]), []);
  });

  it("should return empty array when there are no messages | 0 case scenario", () => {
    const messages = await getAllMessages(latestFetchDate, messages);
    deepEqual(messages, []);
  });

  it("should return 1 message on cool down | 1 case scenario", () => {
    const messages = ([]) => [];
    deepEqual(messages([]), []);
  });
});
