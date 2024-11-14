import { eq } from "drizzle-orm";
import { db, messagesTable } from "../chat/db";

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
