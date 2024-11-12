import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const messagesTable = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  timeStamp: integer().notNull(),
  content: varchar().notNull(),
});