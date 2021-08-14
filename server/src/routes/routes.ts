import {Router} from 'express'
import User from './user'
import News from './news/news'

class Routes {

    public router = Router()
    public news = new News()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes(): void{

        // user route
        this.router.get('/', User)
        this.router.get('/news', this.news.getNews)
    }
}

export default Routes