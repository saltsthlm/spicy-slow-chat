import { Repository } from "./repository";

export function createService(repository: Repository) {
  async function getAllMessagesFromRepository() {
    return await repository.getMessages();
  }

  return {
    getAllMessagesFromRepository,
  };
}
