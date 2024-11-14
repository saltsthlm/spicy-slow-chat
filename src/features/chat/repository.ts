import "dotenv/config";
import { MessageInsert } from "./types";
import { messagesTable, db, fetchTable } from "./db";
import { and, count, desc, eq, gte, lt } from "drizzle-orm";

export function createRepository() {
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

    async getCountOfFetchesForUserBetween(
      username: string,
      from: bigint,
      to: bigint,
    ) {
      return (
        await db
          .select({ count: count() })
          .from(fetchTable)
          .where(
            and(
              eq(fetchTable.username, username),
              gte(fetchTable.timestamp, from),
              lt(fetchTable.timestamp, to),
            ),
          )
      ).pop()?.count;
    },

    async getLatestFetchTimestampFor(username: string) {
      return (
        await db
          .select({ timestamp: fetchTable.timestamp })
          .from(fetchTable)
          .where(eq(fetchTable.username, username))
          .orderBy(desc(fetchTable.timestamp))
          .limit(1)
      )[0].timestamp;
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
