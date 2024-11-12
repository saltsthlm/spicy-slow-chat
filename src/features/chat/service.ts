import { createRepository } from "./repository";

export function createServiceChat() {
  const repository = createRepository();

  async function getAllMessagesFromRepository() {
    return await repository.getMessages();
  }

  return {
    getAllMessagesFromRepository,
  };
}
