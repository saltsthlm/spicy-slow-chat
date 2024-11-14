import "dotenv/config";
import { Message } from "./types";
import { messagesTable, db, fetchTable } from "./db";

export function createRepository() {
  return {
    async getAllMessages() {
      await db.insert(fetchTable).values({
        username: "John Wick",
        timestamp: BigInt(Date.now()),
      });
      return await db.select().from(messagesTable);
    },

    async storeMessage(message: Message) {
      await db.insert(messagesTable).values({
        username: message.username,
        timestamp: message.timestamp,
        content: message.content,
      });
    },
    async getAllFetches() {
      return await db.select().from(fetchTable);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
