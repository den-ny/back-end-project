import { Router } from 'express'
import * as controller from '../controllers/product.js'

const router = Router()

router.get('/product/all', controller.getAllProducts)
router.get('/product/:id', controller.getProduct)

export default router