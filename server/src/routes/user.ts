import bodyParser from 'body-parser'
import express from 'express'

class User {

    public express: express.Application;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.users = []
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: false }))
    }

    private routes(): void {

        // request to get all the users
        this.express.get('/users', (req, res, next) => {
            res.json(this.users)
        })

        // request to get all the users by userName
        this.express.get('/users/:userName', (req, res, next) => {
            const user = this.users.filter(function(user) {
                if (req.params.userName === user.userName) {
                    return user
                }
            })
            res.json(user)
        })

        // request to post the user
        // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
        this.express.post('/user', (req, res, next) => {
            this.users.push(req.body.user)
            res.json(this.users)
        })
    }
}

export default new User().express
