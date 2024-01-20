enum PageType {
  Home = 'home',
  Profile = 'charts',
  Monitor = 'monitor',
  settings = 'settings'
}
export default defineStore('page', () => {
  const currentPages = ref<PageType>('xx')

  return {
    currentPages
  }
})
