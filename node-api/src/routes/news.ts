import bodyParser from "body-parser";
import express from "express";
import {Logger} from "../logger/logger"
// import news from "../assets/news/showdown-demo.md"

class News {

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

        // request to get all the news
        this.express.get("/news", (req, res, next) => {
          console.log(req.headers.language)
          this.logger.info("news");
            res.json({
              "message": req.headers.language
            });
        });
    }
}

export default new News().express;
