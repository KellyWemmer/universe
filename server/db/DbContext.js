import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy';
import { ValueSchema } from '../models/Value'

class DbContext {
  create(galaxyData) {
      throw new Error('Method not implemented.');
  }
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema)
}

export const dbContext = new DbContext()
