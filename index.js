import mongoose from 'mongoose'
import db from './connection.js'
import Store from './models/Store.js'
import storeData from './data/storeData.json' assert {type: 'json'}
import Product from './models/Product.js'
import productData from './data/productData.json' assert {type: 'json'}
import express from 'express'

const app = express()

Store.deleteMany({})
  .then(() => Product.deleteMany({}))
  .then(() => Store.insertMany(storeData))
  .then(() => Product.insertMany(productData))
  .then(() => mongoose.disconnect())
