import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async getMessageCount() {
      return await repository.getMessageCount();
    },
    async getFetchCount() {
      return await repository.getFetchCount();
    },
    async getFetchCountPerUser() {
      return await repository.getFetchCountPerUser();
    },
    async getMessageCountPerUser() {
      return await repository.getMessageCountPerUser();
    },
    async getNewMessageCountPerFetch() {
      const allFetches = await repository.getMessageCountByTimestamp();
    },
  };
}
