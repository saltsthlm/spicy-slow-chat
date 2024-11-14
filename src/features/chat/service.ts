import { Repository } from "./repository";
import { MessageInsert } from "./types";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      const latestFetchDate = await repository.getLatestFetchTimestampFor(
        getCurrentUserName(),
      );

      return (await repository.getAllMessages()).map((message) =>
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

    async getAllFetchesForToday() {
      const todaysFetches = await repository.getAllFetchsForToday();
      console.log("today's fetches", todaysFetches);
    },

    async storeFetch(username: string) {
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
