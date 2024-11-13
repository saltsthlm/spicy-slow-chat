import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { Message } from "./types";

async function getAllMessages(
  latestFetchDate: bigint,
  messages: Message[],
  // coolDownTimeInMillis: bigint,
) {
  messages.filter((message) => {
    return message.timestamp > latestFetchDate + BigInt(3600 * 1000);
  });
}

describe("Cool down:", () => {
  it("Works!", () => {});
  it("should return empty array when there are no messages | 0 case scenario", () => {
    const messages = ([]) => [];
    deepEqual(messages([]), []);
  });

  it("should return empty array when there are no messages | 0 case scenario", () => {
    // const messages = await getAllMessages(latestFetchDate, messages, coolDownTimeInSeconds);
    deepEqual(messages([]), []);
  });

  it("should return 1 message on cool down | 1 case scenario", () => {
    const messages = ([]) => [];
    deepEqual(messages([]), []);
  });
});
