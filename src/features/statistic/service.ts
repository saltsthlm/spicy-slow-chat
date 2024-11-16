import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async getMessageCount() {
      return await repository.getMessageCount();
    },

    async getFetchCount() {
      return await repository.getFetchCount();
    },
    async getMessageCountPerUser() {
      return await repository.getMessageCountPerUser();
    },
    async getFetchCountPerUser() {
      return await repository.getFetchCountPerUser();
    },
    async getAllFetches() {
      return await repository.getAllFetches();
    },
  };
}
