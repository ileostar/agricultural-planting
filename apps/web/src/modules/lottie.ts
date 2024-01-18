import Vue3Lottie from 'vue3-lottie'
import type { UserModule } from '../../types/types'

// Setup Lottie
export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return
  app.use(Vue3Lottie, { name: 'LottieAnimation' })
}
