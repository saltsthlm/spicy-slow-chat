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
    async getNewMessageCountByFetch() {
      const usernames = await repository.getAllUsernames();
      usernames.map(async ({ username }) => {
        return await repository.getAllFetchesByUsername(username);
      });

      // const allFetches = await repository.getAllFetches();
      // const messageCountsByTimestamp = await Promise.all(

      //   allFetches.map(async (fetch) => {
      //     return await repository.getMessageCountByTimestamp(fetch.timestamp);
      //   })
      // );

      // const newMessageCountByFetch = messageCountsByTimestamp.map(
      //   (currentMessageCount, index, array) => {
      //     const previousMessageCount = array[index - 1] || 0;
      //     return currentMessageCount - previousMessageCount;
      //   }
      // );

      // return newMessageCountByFetch;
    },

    async getAllUsernames() {
      return await repository.getAllUsernames();
    },
  };
}
