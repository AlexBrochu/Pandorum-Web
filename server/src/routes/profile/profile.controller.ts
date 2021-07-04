import express from 'express'
import {Logger} from '../../logger/logger'
import fs from 'fs'
import path from 'path'

class SecuredNews {

    public express: express.Application;
    public logger: Logger

    // array to hold news
    public newsFr: string[] = [];
    public newsEn: string[] = [];

    constructor() {
        this.express = express()
        this.routes()
        this.logger = new Logger()
    }

    private routes(): void {        // request to get all the news
        
        this.express.get('/profile', (req, res, next) => {
            let newsLoaded: string[] = []
            if(req.headers.language === 'fr')
                newsLoaded = this.newsFr
            else 
                newsLoaded = this.newsEn

            this.logger.info('Number of news returned: ' + newsLoaded.length)
            this.logger.info('Language returned: ' + req.headers.language)
                res.json({
                'info': req.headers.language,
                'news': newsLoaded, 
                })
        })
    }
}

export default new SecuredNews().express
