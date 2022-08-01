import mongoose from 'mongoose'

const Store = new mongoose.Schema({
  category: String,
  products: [{
    productNumber: Number,
    productName: String,
    photoSrc: String,
    description: String,
    price: Number
  }]
})

export default mongoose.model('Store', Store)