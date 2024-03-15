export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const db = useDatabase()

  const { rows } = await db.sql`SELECT * FROM todos WHERE id = ${id}`

  return rows
})
