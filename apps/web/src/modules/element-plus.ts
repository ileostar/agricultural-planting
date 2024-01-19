import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import type { UserModule } from '../../types/types'

// Setup Element-Plus
export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return
    app.use(ElementPlus, { locale: zhCn })
}
