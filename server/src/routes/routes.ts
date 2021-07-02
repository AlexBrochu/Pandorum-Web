import express from 'express'
import User from './user'
import HelloWord from './hello-word'
import News from './news/news'
import Authentication from './authentication'
import checkJwt from '../auth/validate-jwt'
import { Logger } from '../logger/logger'

class Routes {

    public express: express.Application;
    private logger: Logger

    // array to hold users
    public users: any[];

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
        this.express.use('/', User)
        this.express.use('/', HelloWord)
        this.express.use('/', News)
    }
}

export default new Routes().express