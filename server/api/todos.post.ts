import { Todo } from '~/types/Todo'

export default defineEventHandler(async (event) => {
  const db = useDatabase()

  const todo: Todo = await readBody(event)

  const { rows } =
    await db.sql`INSERT INTO todos VALUES (${todo.id}, ${todo.title}, 0)`

  return {
    rows,
  }
})
