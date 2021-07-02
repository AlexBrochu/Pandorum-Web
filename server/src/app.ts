import express from "express";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";
import expressSession from "express-session"
import passport from "passport"
import Auth0Strategy from "passport-auth0"
import * as dotenv from "dotenv"
dotenv.config();

class App {

    public express: express.Application;
    public logger: Logger
    private session: any = {
        secret: process.env.SESSION_SECRET,
        cookie: {},
        resave: false,
        saveUninitialized: false
    };

    // setup authentication security https://auth0.com/blog/create-a-simple-and-secure-node-express-app/
    private strategy = new Auth0Strategy(
        {
          domain: process.env.AUTH0_DOMAIN,
          clientID: process.env.AUTH0_CLIENT_ID,
          clientSecret: process.env.AUTH0_CLIENT_SECRET,
          callbackURL: process.env.AUTH0_CALLBACK_URL
        },
        function(accessToken, refreshToken, extraParams, profile, done) {
          /**
           * Access tokens are used to authorize users to an API
           * (resource server)
           * accessToken is the token to call the Auth0 API
           * or a secured third-party API
           * extraParams.id_token has the JSON Web Token
           * profile has all the information from the user
           */
          return done(null, profile);
        }
    );

    // array to hold users
    public users: any[];

    constructor() {
        this.logger = new Logger();
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        if (process.env.NODE_ENV !== 'production') {
            this.session.cookie.secure = true
        }
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(expressSession(this.session))
        this.express.use("/static", express.static(__dirname + '/assets'))
        passport.use(this.strategy)
        this.express.use(passport.initialize())
        this.express.use(passport.session())
    }

    private routes(): void {
        // user route
        this.express.use("/api", Routes);
        // const a = undefined;
        // const b = a ?? 'test';
        // this.logger.info(`ES11 - ${b}`)
        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;