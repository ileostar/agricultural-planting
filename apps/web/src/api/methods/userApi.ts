// 案例学习：https://alova.js.org/zh-CN/tutorial/best-practice/method-manage
import http from '..'

interface LoginParams {
  username: string;
  password: string;
}

export default {
  register: (username: string, password: string, confirmPassword: string) => {
    return http.post('/user/register', {
      username,
      password,
      confirmPassword,
    })
  },

  Login: ({ username, password}: LoginParams) => {
    return http.post('/user/login', {
      username,
      password,
    })
  },
}
