import { Router } from "express";
import {ProductController} from '../controllers/ProductController/ProductController' 
import { CountController } from "../controllers/CountProductController/CountController";
import { BrandController } from "../controllers/BrandFilterController/BrandController";

const router = Router()
const controllerProduct = new ProductController()
const controllerCount = new CountController()
const controllerBrand = new BrandController()

router.get('/products', controllerProduct.list)
router.get('/products/count', controllerCount.counter)
router.get('/products/brand', controllerBrand.filterBrand)

export default router