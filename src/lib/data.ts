const db = drizzle({ schema });

export async function fetchMessages() {
  const data = await db.select().from(messages);

  return data;
}
