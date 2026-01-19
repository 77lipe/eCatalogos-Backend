import { Router } from "express";
import {ProductController} from '../controllers/ProductController/ProductController' 
import { CountController } from "../controllers/CountProductController/CountController";
import { BrandController } from "../controllers/BrandFilterController/BrandController";
import { GenderController } from "../controllers/GenderFilterController/GenderController";
import { CategoryController } from "../controllers/CategoryController/CategoryController";
import { ProductIdController } from "../controllers/ProductController/ProductByIdController";

const router = Router()
const controllerProduct = new ProductController()
const controllerCount = new CountController()
const controllerBrand = new BrandController()
const controllerGender = new GenderController()
const controllerCategory = new CategoryController()
const controllerProductId = new ProductIdController()

router.get('/products', controllerProduct.list)
router.get('/products/count', controllerCount.counter)
router.get('/products/brand', controllerBrand.filterBrand)
router.get('/products/gender', controllerGender.FilterGender)
router.get('/products/category', controllerCategory.filterCategory)
router.get('/products/:productId', controllerProductId.getParams)

export default router