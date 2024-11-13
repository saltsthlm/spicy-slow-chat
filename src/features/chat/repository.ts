import "dotenv/config";
import { Message } from "./types";
import { messagesTable, db } from "./db";

export function createRepository() {
  return {
    async getAllMessages() {
      return await db.select().from(messagesTable);
    },

    async storeMessage(message: Message) {
      await db.insert(messagesTable).values({
        username: message.username,
        timeStamp: message.timestamp,
        content: message.content,
      });
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
