import { PrismaClient, Prisma } from "@prisma/client"
import { VariantInput } from "../../../../models/ProductInput"
import { SkuService } from "../skuProduct/skuProductService"

export class VariantPutService{
    constructor(private skuService: SkuService){}

    async variantService(
        tx: Prisma.TransactionClient,
        productId: number,
        variants?: VariantInput[]
    ){
        if(!variants) return

        for (const variant of variants){
            let variantId = variant.id

            if(variantId){
                await tx.variants.update({
                    where:{
                        id: variantId
                    },
                    data: {
                        name: variant.name,
                        hex_code: variant.hex_code
                    }
                })
            }else{
                const createdVariant = await tx.variants.create({
                    data:{
                        name: variant.name,
                        hex_code: variant.hex_code,
                        product_id: productId
                    }
                })

                variantId = createdVariant.id
            }

            await this.skuService.SkuPutService(tx, variantId!, variant.skus)
        }
    }
}