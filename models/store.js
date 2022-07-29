import mongoose from 'mongoose'

const Store = new mongoose.Schema({
  category: String,
  products: [{
    productName: String,
    productNumber: Number
  }]
})

export default mongoose.model('Store', Store)
