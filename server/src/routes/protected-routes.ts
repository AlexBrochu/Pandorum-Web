import express from 'express'
import SecuredNews from './news/secured-news'
import { Logger } from '../logger/logger'

class ProtectedRoutes {
  public express: express.Application
  private logger: Logger

  constructor() {
    this.express = express()
    this.middleware()
    this.routes()
    this.logger = new Logger()
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }

  private routes(): void {
    // user route
    this.express.use('/', SecuredNews)
  }
}

export default new ProtectedRoutes().express
