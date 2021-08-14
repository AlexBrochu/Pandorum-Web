import { Router } from 'express'
import SecuredNewsController from './news/secured-news.controller'

class ProtectedNewsRoutes {
  public path = '/news';
  public router = Router();
  private SecuredNewsController = new SecuredNewsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    // user route
    this.router.get(`${this.path}`, this.SecuredNewsController.getAllNews)
  }
}

export default ProtectedNewsRoutes
