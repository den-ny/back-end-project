import mongoose from 'mongoose'

const Product = new mongoose.Schema({
  productNumber: Number,
  productName: String,
  category: String,
  photoSrc: String,
  description: String,
  price: Number
})

export default mongoose.model('Product', Product)
