import { Router } from "express";
import {ProductController} from '../controllers/ProductController' //não existe ainda

const router = Router()
const controller = new ProductController()

router.get('/products', controller.list)

export default router