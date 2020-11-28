import * as bodyParser from "body-parser";
import * as express from "express";
import {Logger} from "../logger/logger"

class HelloWord {

    public express: express.Application;
    public logger: Logger

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // request to get all the users
        this.express.get("/test", (req, res, next) => {
          this.logger.info("TEST");
            res.json({
              "message": "Hello Word test"
            });
        });
    }
}

export default new HelloWord().express;
