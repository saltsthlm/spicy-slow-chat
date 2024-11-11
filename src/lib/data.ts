export async function fetchMessages() {
  const data = await sql`SELECT * FROM messages`;

  return data;
}
