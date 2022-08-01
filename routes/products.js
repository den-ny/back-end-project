import { Router } from 'express'
import * as controller from '../controllers/product.js'

const router = Router()

router.get('/all', controller.getAllProducts)
router.get('/:id', controller.getProduct)
router.get('/', controller.searchProducts)

export default router