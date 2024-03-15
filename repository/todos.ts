export function todosRepository() {
  const { $http } = useNuxtApp()

  async function getAllTodos() {
    const response = await $http('/api/todos')

    return response.data as Array<Todo>
  }

  async function getSingleTodo(id: number) {
    const response = await $http(`/api/todos/${id}`)

    return response.data as Todo
  }

  async function createTodo(todo: Todo) {
    const response = await $http('/api/todos', {
      method: 'POST',
      data: todo,
    })

    return response.data
  }

  return {
    getAllTodos,
    getSingleTodo,
    createTodo,
  }
}
