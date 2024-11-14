import { getMondayOfCurrentWeek } from "./helper";
import { filterByFetchDateAndUsername } from "./logic/filter";
import { calculateRemainingTokens } from "./logic/tokens";
import { Repository } from "./repository";
import { MessageInsert } from "./types";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      const latestFetchDate = await repository.getLatestFetchTimestampFor(
        getCurrentUserName(),
      );

      return (await repository.getAllMessages())
        .filter((message) =>
          filterByFetchDateAndUsername(
            message,
            latestFetchDate,
            getCurrentUserName(),
          ),
        )
        .map((message) =>
          calculateCoolDown(latestFetchDate, message.timestamp)
            ? message
            : { ...message, content: "Message is on cool down" },
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
      let tokens = { weekly: 2, daily: 1 };

      const dayInMillis = 24 * 60 * 60 * 1000;
      const startDay = BigInt(getMondayOfCurrentWeek(new Date()).getTime());
      for (let day = 0; day < 7; day++) {
        const fromInMillis = startDay + BigInt(day * dayInMillis);
        const toInMillis = startDay + BigInt((day + 1) * dayInMillis);
        const numberOfFetches =
          (await repository.getCountOfFetchesForUserBetween(
            username,
            fromInMillis,
            toInMillis,
          )) || 0;
        tokens = calculateRemainingTokens(numberOfFetches, tokens);
      }

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
  return messageTimestamp + BigInt(5 * 1000) < latestFetchDate;
}

export function getCurrentUserName(): string {
  return "John Wick";
}
