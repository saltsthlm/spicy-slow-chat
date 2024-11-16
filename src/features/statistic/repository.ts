import { count, lte } from "drizzle-orm";
import { db, fetchTable, messagesTable } from "../db";

export function createRepository() {
  return {
    async getMessageCount() {
      return await db.select({ count: count() }).from(messagesTable);
    },
    async getFetchCount() {
      return await db.select({ count: count() }).from(fetchTable);
    },
    async getMessageCountPerUser() {
      return await db
        .select({ count: count(), username: messagesTable.username })
        .from(messagesTable)
        .groupBy(messagesTable.username);
    },
    async getFetchCountPerUser() {
      return await db
        .select({ count: count(), username: fetchTable.username })
        .from(fetchTable)
        .groupBy(fetchTable.username);
    },
    async getAllFetches() {
      return await db.select().from(fetchTable);
    },
    async getMessageCountByTimestamp(timestamp: bigint) {
      return await db
        .select({ count: count() })
        .from(messagesTable)
        .where(lte(messagesTable.timestamp, timestamp));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
