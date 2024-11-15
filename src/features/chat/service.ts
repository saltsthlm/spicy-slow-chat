import { numberOfdaysSinceMonday } from "./helper";
import { filterByFetchDateAndUsername } from "./logic/filter";
import { calculateTokens } from "./logic/tokens";
import { Repository } from "./repository";
import { MessageInsert } from "./types";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      const latestFetchDate = await repository.getLatestFetchTimestampFor(
        getCurrentUserName()
      );

      return (await repository.getAllMessages())
        .filter((message) =>
          filterByFetchDateAndUsername(
            message,
            latestFetchDate,
            getCurrentUserName()
          )
        )
        .map((message) =>
          calculateCoolDown(latestFetchDate, message.timestamp)
            ? message
            : { ...message, content: "Message is on cool down" }
        );
    },

    async postMessage(content: string, username: string) {
      const test = {
        content,
        username,
        timestamp: BigInt(Date.now()),
      };
      return await repository.storeMessage(test);
    },

    async getUserTokens(username: string) {
      const dayInMillis = 24 * 60 * 60 * 1000;

      const today = new Date();
      const daysSinceMonday = numberOfdaysSinceMonday(today);
      const startDayInMillis = BigInt(
        today.setHours(0, 0, 0, 0) - daysSinceMonday * dayInMillis
      );

      const numbersOfFetches = await Promise.all(
        Array.from({ length: daysSinceMonday + 1 }).map(async (_, day) => {
          const fromInMillis = startDayInMillis + BigInt(day * dayInMillis);
          const toInMillis = startDayInMillis + BigInt((day + 1) * dayInMillis);
          return (
            (await repository.getCountOfFetchesForUserBetween(
              username,
              fromInMillis,
              toInMillis
            )) || 0
          );
        })
      );

      const tokens = calculateTokens(numbersOfFetches);

      return tokens.weekly + tokens.daily;
    },

    async storeFetch(username: string) {
      if (await this.getUserTokens(username))
        await repository.storeFetch(username);
    },

    async seedMessagesTable(message: MessageInsert) {
      return await repository.storeMessage(message);
    },
  };
}

function calculateCoolDown(latestFetchDate: bigint, messageTimestamp: bigint) {
  return messageTimestamp + BigInt(60 * 1000) < latestFetchDate;
}

export function getCurrentUserName(): string {
  return "John Wick";
}
