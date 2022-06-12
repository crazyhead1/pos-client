import { LowSync, JSONFileSync } from 'lowdb'
import { LOCAL_DB_FILE_NAME } from '../../../ui/common/constants'

export const localDB = new LowSync(new JSONFileSync(LOCAL_DB_FILE_NAME))
