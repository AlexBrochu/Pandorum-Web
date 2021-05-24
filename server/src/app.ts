import express from "express";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";

class App {

    public express: express.Application;
    public logger: Logger

    // array to hold users
    public users: any[];

    constructor() {
        this.logger = new Logger();
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use("/static", express.static(__dirname + '/assets'))
    }

    private routes(): void {
        // user route
        this.express.use("/api", Routes);
        const a = undefined;
        const b = a ?? 'test';
        this.logger.info(b)
        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;