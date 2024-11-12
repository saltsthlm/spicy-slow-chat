import { db } from "@/db";
import { messagesTable } from "@/db/schema";


export async function FetchMessages() {
  const data = await db.select().from(messagesTable);
  return data;
}

