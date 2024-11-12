import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return await repository.getAllMessages();
    },
    async postMessage() {
      return await repository.postMessage(message);
    },
  };
}
