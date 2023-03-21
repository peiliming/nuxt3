<script setup lang="ts">
interface Menu {
  title: string,
  url: string
}

const menus: Menu[] = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Gpt', url: '/gpt' }
];
</script>

<template>
  <header class="header-flex">
    <h1>ロゴ</h1>
    <nav>
      <ul>
        <li v-for="(menu, i) in menus"><NuxtLink :to="menu.url" active-class="active-list" exact>{{ menu.title }}</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header-flex {
  display: flex;
  height: 60px;
  align-items: center;

  nav {
    margin-left: auto;

    ul {
      list-style: none;
      display: flex;

      li {
        margin-left: 30px;

        a {
          color: #333;
          text-decoration: none;

          &.active-list {
            color: red;
          }
        }
      }
    }
  }
}
</style>