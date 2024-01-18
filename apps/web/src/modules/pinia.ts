import store from '@/store'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { UserModule } from '../../types/types'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ isClient, initialState, app }) => {
  store.use(piniaPluginPersistedstate)
  app.use(store)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
  store.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = store.state.value
}
