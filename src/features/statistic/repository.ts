import { count } from "drizzle-orm";
import { db, fetchTable, messagesTable } from "../db";

export function createRepository() {
  return {
    async getMessageCount() {
      return await db.select({ count: count() }).from(messagesTable);
    },
    async getFetchCount() {
      return await db.select({ count: count() }).from(fetchTable);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
