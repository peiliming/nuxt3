<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
const { isLogin, userId, login } = useAuthStore()

interface User {
  id: string,
  password: string
}

const user: User = {
  id: 'admin',
  password: 'admin'
}

const id: Ref<string> = ref('')
const password:Ref<string> = ref('')

const userLogin = async() => {
  if(id.value == ref(user.id).value && password.value == ref(user.password).value) {
    isLogin.value = true
    await login()
  }
}

</script>

<template>
  {{ isLogin }}
  <div>
    id: <input type="text" v-model="id"/>
    <br>
    password: <input type="password" v-model="password" />
    <br>
    <button @click="userLogin()">ログイン</button>
  </div>
</template>