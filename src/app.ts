import express from 'express'
import { connect, set } from 'mongoose'
import { NODE_ENV, PORT } from '@config'
import { dbUri, dbOptions } from '@databases/mongo'
class App {
  public app: express.Application
  public env: string
  public port: string | number

  constructor() {
    this.app = express()
    this.env = NODE_ENV || 'development'
    this.port = PORT || 3000

    this.connectToDatabase()
    this.initializeMiddlewares()
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`app listening on port ${this.port}`)
    })
  }

  public initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  public getServer() {
    return this.app
  }

  public connectToDatabase() {
    if (this.env !== 'production') {
      set('debug', true)
    }

    connect(dbUri, dbOptions)
      .then(() => console.log('connected ok'))
      .catch(err => console.error(err))
  }
}

export default App
