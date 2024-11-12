import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { Message } from "./types";

export const db = drizzle(process.env.DATABASE_URL!);

export const messagesTable = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  timeStamp: integer().notNull(),
  content: varchar().notNull(),
});

export function createRepository() {
  return {
    async getAllMessages() {
      return await db.select().from(messagesTable);
    },

    async storeMessage(message: Message) {
      await db
        .insert(messagesTable)
        .values({ userId: 2, timeStamp: 2323, content: message.content });
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
