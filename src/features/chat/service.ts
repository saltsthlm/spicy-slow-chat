import { Repository } from "./repository";
import { MessageInsert } from "./types";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      const latestFetchDate = BigInt(Date.now());
      return (await repository.getAllMessages()).map((message) =>
        calculateCoolDown(latestFetchDate, message.timestamp)
          ? message
          : { ...message, content: "Message is on cool down" }
      );
    },

    async postMessage(message: MessageInsert) {
      const test = {
        ...message,
        username: Math.ceil(Math.random() * 10000).toString(),
        timestamp: BigInt(Date.now()),
      };
      return await repository.storeMessage(test);
    },
  };
}

function calculateCoolDown(latestFetchDate: bigint, messageTimestamp: bigint) {
  return messageTimestamp + BigInt(5 * 1000) < latestFetchDate;
}
