import express from 'express'
import morgan from 'morgan'
import { connect, set } from 'mongoose'
import { LOG_FORMAT, NODE_ENV, PORT } from '@config'
import { dbUri, dbOptions } from '@databases/mongo'
import { logger, stream } from '@utils/logger'
import { Routes } from '@/interfaces/routes.interface'

class App {
  public app: express.Application
  public env: string
  public port: string | number

  constructor(routes: Routes[]) {
    this.app = express()
    this.env = NODE_ENV || 'development'
    this.port = PORT || 3000

    this.connectToDatabase()
    this.initializeMiddlewares()
    this.initializeRoutes(routes)
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`app listening on port ${this.port}`)
    })
  }

  public getServer() {
    return this.app
  }

  private initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT, { stream }))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use(route.path, route.router)
    })
  }

  private connectToDatabase() {
    if (this.env !== 'production') {
      set('debug', true)
    }

    connect(dbUri, dbOptions)
      .then(() => {
        logger.info(`db connected to ${dbUri}`)
      })
      .catch(err => {
        logger.error(`failed to connect to db: ${err}`)
      })
  }
}

export default App
