import { Router } from 'express'
import products from './products.js'
import category from './category.js'

const router = Router()

router.get('/api', (req, res) => {
  res.send('this is the root route')
})

router.use("/api/products", products)
router.use("/api/category", category)


export default router