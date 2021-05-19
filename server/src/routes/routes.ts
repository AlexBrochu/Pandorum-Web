import bodyParser from "body-parser";
import express from "express";
import User from "./user";
import HelloWord from "./hello-word";
import News from "./news";

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
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
    }

    private routes(): void {

        // user route
        this.express.use("/", User);
        this.express.use("/", HelloWord);
        this.express.use("/", News);
    }
}

export default new Routes().express;