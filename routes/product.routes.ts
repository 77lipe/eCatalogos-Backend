import { Router } from "express";
import {ProductController} from '../controllers/ProductController/ProductController' 
import { CountController } from "../controllers/CountProductController/CountController";
import { BrandController } from "../controllers/BrandFilterController/BrandController";
import { GenderController } from "../controllers/GenderFilterController/GenderController";
import { CategoryController } from "../controllers/CategoryController/CategoryController";
import { ProductIdController } from "../controllers/ProductController/ProductByIdController";
import { ProductPostController } from "../controllers/ProductController/ProductPostController";
import { PutProductController } from "../controllers/ProductController/ProductPutController";
import { softDeleteController } from "../controllers/ProductController/ProductDeleteController";

const router = Router()
const controllerProduct = new ProductController()
const controllerCount = new CountController()
const controllerBrand = new BrandController()
const controllerGender = new GenderController()
const controllerCategory = new CategoryController()
const controllerProductId = new ProductIdController()
const controllerProductPost = new ProductPostController()
const controllerProductPut = new PutProductController()
const controllerSoftDelete = new softDeleteController()

router.get('/products', controllerProduct.list)
router.get('/products/count', controllerCount.counter)
router.get('/products/brand', controllerBrand.filterBrand)
router.get('/products/gender', controllerGender.FilterGender)
router.get('/products/category', controllerCategory.filterCategory)
router.get('/products/:productId', controllerProductId.getParams)
router.post('/products', controllerProductPost.ProductController)
router.put('/products/:id', controllerProductPut.putProduct)
router.delete('/products/:id', controllerSoftDelete.softDelete)

export default router