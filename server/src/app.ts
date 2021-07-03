import express from 'express'
import { Logger } from './logger/logger'
import Routes from './routes/routes'
import helmet from 'helmet'
import checkJwt from './auth/validate-jwt'
import protectedRoutes from './routes/protected-routes'

class App {

    public express: express.Application;
    public logger: Logger

    // array to hold users
    public users: any[];
    private apiVersion = 'v1/'

    constructor() {
        this.logger = new Logger()
        this.express = express()
        this.middleware()
        this.routes()
        this.users = []
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use('/static', express.static(__dirname + '/assets'))
        this.express.use(helmet())
    }

    private routes(): void {
        this.express.use('/api/'.concat(this.apiVersion), Routes)
        this.express.use('/api/'.concat(this.apiVersion).concat('protected/'),checkJwt, protectedRoutes)
        this.express.use(function(err, req, res, next) {
            if(err.name === 'UnauthorizedError') {
              res.status(err.status).send({message:err.message})
              console.error(err.message)
              return
            }
         next()
        })
        // const a = undefined;
        // const b = a ?? 'test';
        // this.logger.info(`ES11 - ${b}`)
        // handle undefined routes
        this.express.use('*', (req, res, next) => {
            res.send('Make sure url is correct!!!')
        })
    }
}

export default new App().express