import { useAuthStore } from '~/stores/auth'
const { isLoggedIn, isLogin } = useAuthStore()
export default defineNuxtRouteMiddleware((to, from) => {
  // この middleware が設定されている場合は要ログイン
  // if (!isLogin && to.path !== '/login') {
  //   const path = '/login'
  //   return { path }
  // }

  if (to.path === '/') {
    return navigateTo('/login')
    }

  // if (!isLogin && to.path !== '/login') {
  //   return navigateTo('/1login', { replace: true })
  // }
})