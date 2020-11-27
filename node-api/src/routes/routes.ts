import * as bodyParser from "body-parser";
import * as express from "express";
import User from "./user";

class Routes {

    public express: express.Application;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // user route
        this.express.use("/", User);
    }
}

export default new Routes().express;