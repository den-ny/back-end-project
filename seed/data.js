import db from "../db/connection.js"
import Store from '../models/store.js'
import storeData from './store-data.json' assert {type: 'json'}
import Product from '../models/product.js'
import productData from './product-data.json' assert {type: 'json'}
import Cart from "../models/cart.js"
import cartData from './cart-data.json' assert {type: 'json'}

Store.deleteMany({})
  .then(() => Product.deleteMany({}))
  .then(() => Store.insertMany(storeData))
  .then(() => Product.insertMany(productData))
  .then(() => db.close())

Cart.deleteMany({})
  .then(() => Cart.insertMany(cartData))
  .then(() => db.close())