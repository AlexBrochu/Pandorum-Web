import bodyParser from "body-parser";
import express from "express";
import {Logger} from "../logger/logger"
import news from "../assets/news/showdown-demo.md"

class News {

    public express: express.Application;
    public logger: Logger

    // array to hold news
    public news: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
        this.news = [news];
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
              "info": req.headers.language,
              "message": this.news, 
            });
        });
    }
}

export default new News().express;
