<script setup lang="ts">
import consolaGlobalInstance from 'consola';

const {currentUser, login} = useAuth()

console.log(currentUser.value)

interface User {
  id: string,
  password: string
}

const userInfo: User = {
  id: 'admin',
  password: 'admin'
}

const id = ref('')
const password = ref('')

const userLogin = async () => {
  if(id.value == ref(userInfo.id).value && password.value == ref(userInfo.password).value) {
    currentUser.value = true
    alert('ok')
    await login()
  }
  //await login()
}
</script>

<template>
  <div>
    {{ id }}
    id: <input type="text" v-model="id" />
    <br>
    password: <input type="password" v-model="password" />
    <br>
    <button @click="userLogin">ログイン</button>
  </div>
</template>