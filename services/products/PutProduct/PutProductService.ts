import { prisma } from "../../../database/prisma"
import { ProductPutBdd } from "./PutProductBdd"
import { Product } from "../../../models/ProductInput"

import { VariantPutService } from "./variantsProduct/variantsProductService"
import { SkuService } from "./skuProduct/skuProductService"
export class putProductService {
    async execute(id: number, data: Product){
         return prisma.$transaction(async (tx) => {
            
            const productbdd = new ProductPutBdd()
            await productbdd.updateProduct(tx, id , data)

            const skuService = new SkuService()
            const variantService = new VariantPutService(skuService)

            await variantService.variantService(tx, id, data.variants)

            return true

         })
    }
}