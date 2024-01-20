interface IUserInfo {
  username: string
  avatarUrl: string
  auth: string
}

export default defineStore('user', () => {
  const userInfo = ref<IUserInfo>()

  return {
    userInfo
  }
})
