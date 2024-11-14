import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { MessageSelect } from "../types";
import { USER_MESSAGES } from "./test-data";
import { filterByFetchDateAndUsername } from "../logic/filter";

describe("Fetches filter", () => {
  it("should return empty array when input messages are empty | 0 case", async () => {
    const messages: MessageSelect[] = [];
    const latestFetchDate = BigInt(1699890100000);
    const user = "John Wick";

    const filteredMessages = messages.filter((message) =>
      filterByFetchDateAndUsername(message, latestFetchDate, user),
    );

    deepEqual(filteredMessages, []);
  });

  it("should return only 3 messages where timestamp <= latest fetchdate | many case", async () => {
    const messages: MessageSelect[] = USER_MESSAGES;

    const latestFetchDate = BigInt(1699890100000);
    const user = "John Wick";

    const filteredMessages = messages.filter((message) =>
      filterByFetchDateAndUsername(message, latestFetchDate, user),
    );

    deepEqual(filteredMessages, messages.slice(0, 3));
  });

  it("should return only 3 messages where timestamp <= latest fetchdate and 1 made by current user | many case", async () => {
    const messages: MessageSelect[] = USER_MESSAGES;

    const latestFetchDate = BigInt(1699890100000);
    const user = "dave_design";

    const filteredMessages = messages.filter((message) =>
      filterByFetchDateAndUsername(message, latestFetchDate, user),
    );

    deepEqual(filteredMessages, [...messages.slice(0, 3), messages[4]]);
  });
});
