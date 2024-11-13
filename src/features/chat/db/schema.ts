
import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const messagesTable = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  timeStamp: timestamp().notNull(),
  content: varchar().notNull(),
});