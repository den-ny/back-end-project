import mongoose from 'mongoose'

const Cart = new mongoose.Schema({
  productNumber: Number,
  productName: String,
  photoSrc: String,
  price: Number,
  quantity: Number,
  totalPrice: Number
})

export default mongoose.model('Cart', Cart)