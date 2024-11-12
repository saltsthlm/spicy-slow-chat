import { Repository } from "./repository";

export function createService(repository: Repository) {
  async function getAllMessagesFromRepository() {
    return await repository.getMessages();
  }

  async function postMessage(message: Message) {
    return await repository.postMessage(message);
  }

  return {
    getAllMessagesFromRepository,
    postMessage,
  };
}
