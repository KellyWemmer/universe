import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true},
    temp: { type: Number,}
    
  },
  { timestamps: true, toJSON: { virtuals: true } }
)


