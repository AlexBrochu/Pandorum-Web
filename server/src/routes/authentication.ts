import express from 'express'
import {Logger} from '../logger/logger'
import expressSession from 'express-session'
import passport from 'passport'
import Auth0Strategy from 'passport-auth0'
import querystring from 'querystring'
import * as dotenv from 'dotenv'
dotenv.config()

class Authenticator {

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
        return done(null, profile)
      }
  );
    

  constructor() {
    this.express = express()
    this.middleware()
    this.routes()
    this.logger = new Logger()
    if (process.env.NODE_ENV !== 'production') {
      this.session.cookie.secure = true
    }
    this.logger.info(JSON.stringify(this.strategy))
  }

  // Configure Express middleware.
  private middleware(): void {
      this.express.use(express.json())
      this.express.use(express.urlencoded({ extended: false }))
      this.express.use(expressSession(this.session))
      this.configurePassport()
      this.express.use(passport.initialize())
      this.express.use(passport.session())
  }

  private configurePassport(){
    passport.use(this.strategy)
    passport.serializeUser((user, done) => {
      done(null, user)
    })
    
    passport.deserializeUser((user, done) => {
      done(null, user)
    })
  }

  private routes(): void {

    // login client
    this.express.get('/login', 
    passport.authenticate('auth0', {
      scope: 'openid email profile'
    }), 
    (req, res, next) => {
      this.logger.info('TEST')
      // res.redirect('/')
    })

    this.express.get('/callback', (req:any, res, next) => {
      passport.authenticate('auth0', (err, user, info) => {
        if (err) {
          return next(err)
        }
        if (!user) {
          return res.redirect('/login')
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err)
          }
          const returnTo = req.session.returnTo
          delete req.session.returnTo
          res.redirect(returnTo || '/')
        })(req, res, next)
      })
    })


    this.express.get('/logout', (req, res)=>{
      req.logOut()
      
      let returnTo = req.protocol + '://' + req.hostname
      const port = req.connection.localPort

      if (port !== undefined && port !== 80 && port !== 443) {
        returnTo =
          process.env.NODE_ENV === 'production'
            ? `${returnTo}/`
            : `${returnTo}:${port}/`
      }

      const logoutURL = new URL(
        `https://${process.env.AUTH0_DOMAIN}/v2/logout`
      )

      const searchString = querystring.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        returnTo: returnTo
      })
      logoutURL.search = searchString

      res.redirect(logoutURL.toString())
    })
  }
}

export default new Authenticator().express
