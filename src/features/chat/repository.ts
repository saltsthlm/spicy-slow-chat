import "dotenv/config";
import { MessageInsert } from "./types";
import { messagesTable, db, fetchTable } from "./db";
import { gte } from "drizzle-orm";

export function createRepository() {
  const startOfTheDay = BigInt(new Date().setHours(0, 0, 0, 0));

  return {
    async getAllMessages() {
      return await db.select().from(messagesTable);
    },

    async storeMessage(message: MessageInsert) {
      await db.insert(messagesTable).values({
        username: message.username,
        timestamp: message.timestamp,
        content: message.content,
      });
    },

    async getAllFetches() {
      return await db.select().from(fetchTable);
    },

    async storeFetch(username: string) {
      await db.insert(fetchTable).values({
        username: username,
        timestamp: BigInt(Date.now()),
      });
    },

    async getAllFetchsForToday() {
      return await db
        .select()
        .from(fetchTable)
        .where(gte(fetchTable.timestamp, startOfTheDay));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
