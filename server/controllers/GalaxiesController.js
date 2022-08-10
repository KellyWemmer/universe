import BaseController from '../utils/BaseController.js'
// import { Auth0Provider } from '@bcwdev/auth0provider.js'
import { galaxiesService } from '../services/GalaxiesService.js'

export class GalaxiesController extends BaseController {

    constructor() {
        super('api/galaxies')
        this.router 
            .get('', this.getGalaxy)
    }

    async getGalaxy(req, res, next) {
        try {
            let galaxies = await galaxiesService.getGalaxies()  
            res.send     
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(req, res, next) {
        try {
            let galaxies = await galaxiesService.getGalaxies()
            res.send    
        } catch (error) {
            next(error)
        }
    }
}