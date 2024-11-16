export function createRepository() {
  return {
    async getAllMessages() {
      return await db.select().from(messagesTable);
    },
    async getAllFetches() {
      return await db.select().from(fetchTable);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
