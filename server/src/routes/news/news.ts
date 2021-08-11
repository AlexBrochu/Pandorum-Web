import {Request, Response, NextFunction} from 'express'
import {Logger} from '../../logger/logger'
import fs from 'fs'
import path from 'path'

class News {
    public logger: Logger

    // array to hold news
    public newsFr: string[] = [];
    public newsEn: string[] = [];

    constructor() {
        this.logger = new Logger()
        this.loadFileLanguage('fr')
        this.loadFileLanguage('en')
    }
    private loadFileLanguage(language: string): void{
        let assetPath = 'assets/news/'
        if (process.env.NODE_ENV !== 'production'){
            assetPath = '../../' + assetPath
        }
        
        const files = fs.readdirSync(path.join(__dirname, assetPath, language, '/'))
        files.forEach(file => {
            if(file.endsWith('.md')){
                const content = fs.readFileSync(path.join(__dirname, assetPath, language.toLocaleLowerCase(), '/', file), 'utf-8')
                if(language === 'fr')
                    this.newsFr.push(content)
                else
                    this.newsEn.push(content)
            }
        })
    }
   // request to get all the news
        
    public getNews = (req: Request, res: Response, next: NextFunction): void => {
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
    }
}

export default News
