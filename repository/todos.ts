export function todosRepository() {
  const { $http } = useNuxtApp()

  async function getAllTodos() {
    const response = await $http('/api/todos')

    return response.data as Array<Todo>
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
    createTodo,
  }
}
