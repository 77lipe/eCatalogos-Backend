import { PrismaClient, Prisma } from "@prisma/client"
import { SkuInput } from "../../../../models/ProductInput"

export class SkuService {
    async SkuPutService(
        tx: Prisma.TransactionClient,
        variant_id: number,
        skus?: SkuInput[]
    ){
        if(!skus) return 
        for(const sku of skus){
            let skuId = sku.id

            if(skuId){
                await tx.skus.update({
                    where: {
                        id: skuId
                    },
                    data: { 
                        size: sku.size,
                        stock: sku.stock,
                        price: sku.price,
                        code: sku.code,
                        multiple_quantity: sku.multiple_quantity
                    }
                })
            }else{
                const createdSku = await tx.skus.create({
                    data:{
                        size: sku.size,
                        stock: sku.stock,
                        price: sku.price,
                        code: sku.code,
                        multiple_quantity: sku.multiple_quantity,
                        variant_id: variant_id
                    }
                })

                skuId = createdSku.id
            }

            if(sku.price_tables){
                await tx.price_tables_skus.deleteMany({
                    where: { 
                        sku_id: skuId
                    }
                })

                await tx.price_tables_skus.createMany({
                    data: sku.price_tables.map(pt => ({
                        sku_id: skuId!,
                        price_table_id: pt.price_table_id,
                        price: pt.price
                    }))
                })
            }
        }
    }
    
}