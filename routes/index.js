import { Router } from 'express'
import products from './products.js'

const router = Router()

router.get('/', (req, res) => {
  res.send('this is the root route')
})

router.use("/", products)

export default router