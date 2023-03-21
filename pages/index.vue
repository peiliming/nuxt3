<script setup lang="ts">
definePageMeta({
  title: 'Home',
  middleware: ['auth']
})
// 各ページのSEO設定
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ],
})
</script>

<template>
  <div>
    <h1>Hello World!!!</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
}
</style>