import { fetchTable, messagesTable } from "./db";

export type MessageInsert = typeof messagesTable.$inferInsert;
export type MessageSelect = typeof messagesTable.$inferSelect;

export type FetchInsert = typeof fetchTable.$inferInsert;
export type FetchSelect = typeof fetchTable.$inferSelect;
