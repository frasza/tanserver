import axios from 'axios'

export default defineNuxtPlugin(() => {
  const http = axios.create({
    headers: {
      Accept: 'application/json',
    },
  })

  return {
    provide: {
      http,
    },
  }
})
