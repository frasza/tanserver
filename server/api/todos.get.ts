export default defineEventHandler(async (event) => {
  const db = useDatabase()

  await db.sql`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    completed BOOLEAN
  );`

  const { rows } = await db.sql`SELECT * FROM todos`

  return rows
})
