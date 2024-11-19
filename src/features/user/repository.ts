import { eq } from "drizzle-orm";
import { db, messagesTable } from "@/db";

export function createRepository() {
  async function loginUserInDb(username: string) {
    return await db
      .select()
      .from(messagesTable)
      .where(eq(messagesTable.username, username));
  }
  return {
    loginUserInDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
