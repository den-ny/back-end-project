import { Router } from 'express'
import * as controller from '../controllers/cart.js'

const router = Router()

router.get('/', controller.getCart)
router.post('/', controller.createCart);
router.put('/', controller.updateCart);
router.delete('/', controller.deleteCart);
export default router