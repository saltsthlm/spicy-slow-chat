import { Repository } from "./repository";
import { Message } from "./types";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return await repository.getAllMessages();
    },
    async postMessage(message: Message) {
      return await repository.storeMessage(message);
    },
  };
}
