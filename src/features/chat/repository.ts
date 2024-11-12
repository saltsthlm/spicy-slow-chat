import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const db = drizzle(process.env.DATABASE_URL!);

export const messagesTable = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  timeStamp: integer().notNull(),
  content: varchar().notNull(),
});

async function FetchMessages() {
  const data = await db.select().from(messagesTable);
  return data;
}

export function createRepository() {
  async function getMessages() {
    return await FetchMessages();
  }
  return {
    getMessages,
  };
}

export type Repository = ReturnType<typeof createRepository>;
