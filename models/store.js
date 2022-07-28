import mongoose from 'mongoose'

const Store = new mongoose.Schema({
  Category: [{
    Product: String
  }]
})

export default mongoose.model('Store', Store)
