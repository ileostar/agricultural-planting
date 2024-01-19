import OnuUI from 'onu-ui'

import type { UserModule } from '../../types/types'

// Setup Onu-Ui
export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return
  app.use(OnuUI)
}
