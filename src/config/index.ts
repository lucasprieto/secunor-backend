import { config } from 'dotenv'

const env = process.env.NODE_ENV || 'development'
config({ path: `.env.${process}.local` })

export const CREDENTIALS = process.env.CREDENTIALS === 'true'
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env