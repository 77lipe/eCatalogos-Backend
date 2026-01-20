import { PrismaClient, Prisma } from "@prisma/client"
import { Product } from "../../../models/ProductInput"

export class ProductPutBdd {
  async updateProduct(
    tx: Prisma.TransactionClient,
    id: number,
    data: Product
  ){
    return tx.products.update({
      where: { id },
      data: {
        name: data.name,
        reference: data.reference,
        type: data.type,
        gender: data.gender,
        brand_id: data.brand_id,
        category_id: data.category_id,
        subcategory_id: data.subcategory_id,
        prompt_delivery: data.prompt_delivery,
        description: data.description
      }
    })
  }
}