import { Repository } from "./repository";
import { Message } from "./types";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return await repository.getAllMessages();
    },
    async postMessage(message: Message) {
      const test = {
        userId: Math.ceil(Math.random() * 10000),
        ...message,
        timestamp: Date.now(),
      };
      return await repository.storeMessage(test);
    },
  };
}
