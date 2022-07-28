import mongoose from 'mongoose'

const Product = new mongoose.Schema({
  Name: String,
  Category: String,
  PhotoSrc: String,
  Description: String,
  Price: Number
})

export default mongoose.model('Product', Product)
