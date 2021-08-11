import express from 'express'
import { Logger } from './logger/logger'
import Routes from './routes/routes'
import helmet from 'helmet'
import checkJwt from './auth/validate-jwt'
import compression from 'compression'
import ProtectedRoutes from './routes/protected-routes'

class App {

    public express: express.Application;
    public logger: Logger
    private apiVersion = 'v1/'
    private protectedRoutes = new ProtectedRoutes()

    constructor() {
        this.logger = new Logger()
        this.express = express()
        this.middleware()
        this.routes()
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use('/static', express.static(__dirname + '/assets'))
        this.express.use(helmet())
        this.express.use(compression())
    }

    private routes(): void {
        this.express.use('/api/'.concat(this.apiVersion), new Routes().router)
        this.express.use('/api/'.concat(this.apiVersion).concat('protected/'),checkJwt, this.protectedRoutes.router)
        // Handle unauthorized error from auth
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
        this.express.use('*', (req, res) => {
            res.send('Make sure url is correct!!!')
        })
    }
}

export default new App().express