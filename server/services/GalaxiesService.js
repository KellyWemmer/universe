import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
    async getGalaxies() {
        let galaxies = await dbContext.Galaxies.find()
        return galaxies
    }

    async createGalaxy(galaxyData) {
        let galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }      
}

export const galaxiesService = new GalaxiesService()
