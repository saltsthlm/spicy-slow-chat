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

export function createRepository() {
  return {
    async getAllMessages() {
      return await db.select().from(messagesTable);
    },
    
    async storeMessage() {
      await db
        .insert(messagesTable)
        .values({ userId: 2, timeStamp: 2323, content: "I love you Daniel!" });
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
