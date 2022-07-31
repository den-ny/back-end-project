import { Router } from 'express'
import * as controller from '../controllers/store.js'

const router = Router()

router.get("/all", controller.getInventory)
router.get("/", controller.getCategory)

export default router