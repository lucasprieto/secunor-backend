import { DB_HOST, DB_PORT, DB_DATABASE } from '@/config'
import { ConnectOptions } from 'mongoose'

export const dbUri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
export const dbOptions: ConnectOptions = {}
