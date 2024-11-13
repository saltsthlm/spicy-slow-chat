import { integer, pgTable, varchar, bigint } from "drizzle-orm/pg-core";

export const messagesTable = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar().notNull(),
  timestamp: bigint({ mode: "bigint" }).notNull(),
  content: varchar().notNull(),
});

export const fetchTable = pgTable("fetches", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar().notNull(),
  timestamp: bigint({ mode: "bigint" }).notNull(),
});
