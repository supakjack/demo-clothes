import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const id = ref<number>()
  const username = ref<string>()
  const role = ref<Role>()

  return { id, username, role }
})
