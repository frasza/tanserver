<script lang="ts" setup>
import { useMutation, useQuery } from '@tanstack/vue-query'
import { todosRepository } from '@/repository/todos'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const { $queryClient } = useNuxtApp()

const { getAllTodos, getSingleTodo, createTodo } = todosRepository()

const { data: todos } = useQuery({
  queryKey: ['todos'],
  queryFn: getAllTodos,
})

const isEnabled = computed(() => !!todos.value)

const { data: todo } = useQuery({
  queryKey: ['todos', length],
  queryFn: () => getSingleTodo(1),
  enabled: isEnabled,
})

const { mutate } = useMutation({
  mutationFn: (newTodo: Todo) => createTodo(newTodo),
  onSuccess: () => {
    $queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})

const { handleSubmit, errors, meta } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      title: z.string().min(5),
    }),
  ),
})

const { value: title } = useField('title')

const onSubmit = handleSubmit((value) =>
  mutate({
    id: 5,
    title: value.title,
    complete: false,
  }),
)
</script>

<template>
  <div v-for="todo in todos" :key="todo.id">
    {{ todo.title }}
  </div>

  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Title" />

    <button>Add</button>
  </form>

  <pre v-if="meta.touched && errors.title">{{ errors }}</pre>
</template>
