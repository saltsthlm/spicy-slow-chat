import { deepEqual, equal } from "node:assert/strict";
import { describe, it } from "node:test";
import { Message } from "./types";
const oneHour = 3600000;
const latestFetchDate = BigInt(0);

// const ON_COOL_DOWN_CONTENT = "Message is on cool down";

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

const messagesAfterCoolDown = [
  {
    username: "user3",
    content: "This message will NOT be on cool down.",
    timestamp: latestFetchDate - BigInt(oneHour),
  },
  {
    username: "user3",
    content: "This message will NOT be on cool down.",
    timestamp: latestFetchDate - BigInt(oneHour),
  },
];

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

  it("should return 1 message on cool down | 1 case scenario on cool down", async () => {
    const message: Message = messageOnCoolDown;

    const mutatedMessage = { ...message, content: "Message is on cool down" };

    const filteredMessages = await getAllMessages(latestFetchDate, [message]);

    deepEqual(filteredMessages, [mutatedMessage]);
  });

  it("should return 2 messages after cool down | many case scenario after cool down", async () => {
    const messages: Message[] = messagesAfterCoolDown;

    // const mappedMessages = messages.map((message) => {
    //   return { ...message, content: "Message is after cool down" };
    // });

    const filteredMessages = await getAllMessages(latestFetchDate, messages);

    deepEqual(filteredMessages, messages);
  });

  // ask Marcus
  it("should return 1 message and Afer cool down and 1 after On cool down | many case scenario", async () => {
    const messages = [messageAfterCoolDown, messageOnCoolDown];

    const mutatedMessage = {
      ...messageOnCoolDown,
      content: "Message is on cool down",
    };

    const filteredMessages = await getAllMessages(latestFetchDate, messages);

    deepEqual(filteredMessages, [messageAfterCoolDown, mutatedMessage]);
  });

  it("should return 1 message and On cool down and 1 After cool down | many case scenario", async () => {
    const messages = [messageOnCoolDown, messageAfterCoolDown];

    const mutatedMessage = {
      ...messageOnCoolDown,
      content: "Message is on cool down",
    };

    const filteredMessages = await getAllMessages(latestFetchDate, messages);
    deepEqual(filteredMessages, [mutatedMessage, messageAfterCoolDown]);
  });
});
