import mongoose from 'mongoose'
import db from './connection.js'
import Store from './models/store.js'
import storeData from './data/store-data.json' assert {type: 'json'}
import Product from './models/product.js'
import productData from './data/product-data.json' assert {type: 'json'}
import express from 'express'

const app = express()

Store.deleteMany({})
  .then(() => Product.deleteMany({}))
  .then(() => Store.insertMany(storeData))
  .then(() => Product.insertMany(productData))
  .then(() => mongoose.disconnect())
