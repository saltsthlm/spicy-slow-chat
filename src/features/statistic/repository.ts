export function createRepository() {
  return {
    async getMessageCount() {
      return await db.select().from(messagesTable);
    },
    async getFetchCount() {
      return await db.select().from(fetchTable);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
