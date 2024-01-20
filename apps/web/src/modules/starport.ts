import StarportPlugin from 'vue-starport'

import type { UserModule } from '../../types/types'

// Setup Vue-Starport
// https://github.com/antfu/vue-starport
export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return
  app.use(StarportPlugin())
}

