import bodyParser from "body-parser";
import express from "express";
import {Logger} from "../logger/logger"
import fs from 'fs'
import path from 'path'
import winston from "winston/lib/winston/config";
// import news from "../assets/news/showdown-demo.md"

class News {

    public express: express.Application;
    public logger: Logger

    // array to hold news
    public newsFr: string[] = [];
    public newsEn: string[] = [];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
        this.loadFileLanguage('fr')
        this.loadFileLanguage('en')
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private loadFileLanguage(language: string): void{
        const files = fs.readdirSync(path.join(__dirname, "../assets/news/", language, '/'))
        files.forEach(file => {
            if(file.endsWith('.md')){
                const content = fs.readFileSync(path.join(__dirname, "../assets/news/", language.toLocaleLowerCase(), '/', file), 'utf-8')
                if(language === 'fr')
                    this.newsFr.push(content)
                else
                    this.newsEn.push(content)
            }
        });
    }

    private routes(): void {        // request to get all the news
        
        this.express.get("/news", (req, res, next) => {
            let newsLoaded: string[] = []
            if(req.headers.language === 'fr')
                newsLoaded = this.newsFr
            else 
                newsLoaded = this.newsEn

            this.logger.info("Number of news returned: " + newsLoaded.length)
            this.logger.info("Language returned: " + req.headers.language);
                res.json({
                "info": req.headers.language,
                "news": newsLoaded, 
                });
        });
    }
}

export default new News().express;
