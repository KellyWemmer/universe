import BaseController from '../utils/BaseController.js'
import { dbContext } from '../db/DbContext.js'
// import { Auth0Provider } from '@bcwdev/auth0provider.js'
import { galaxiesService } from '../services/GalaxiesService.js'

export class GalaxiesController extends BaseController {

    constructor() {
        super('/api/galaxies')
        this.router 
            .get('', this.getGalaxies)
            .post('', this.createGalaxy)
    }

    async getGalaxies(req, res, next) {
        try {
            let galaxies = await galaxiesService.getGalaxies()
            res.send(galaxies)   
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            let galaxyData = req.body
            let galaxy = await galaxiesService.createGalaxy(galaxyData)   
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}