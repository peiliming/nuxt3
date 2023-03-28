import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const name = ref('Eduardo')
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, name, doubleCount, increment }
// })
export const useAuthStore = defineStore('auth', () => {
  const isLogin: Ref<boolean> = ref(false)
  const userId: Ref<string> = ref('')

  const isLoggedIn = computed(
    () => isLogin.value = true
  )

  const login = async() => {
    if (isLogin.value) {
      const to = useRoute().redirectedFrom?.path || '/'
      useRouter().push(to) 
    }
  }

  return {
    isLogin,
    userId,
    isLoggedIn,
    login,
  }
})