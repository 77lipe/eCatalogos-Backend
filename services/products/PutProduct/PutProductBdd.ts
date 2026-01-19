import { prisma } from "../../../database/prisma"
import { Product } from "../../../models/ProductInput"

export class UpdateProductBdd {
  async updateProduct(id: number, data: Product) {
    return prisma.products.update({
      where: { id },
      data: {
        name: data.name,
        reference: data.reference,
        type: data.type,
        gender: data.gender,
        company_id: data.company_id,
        brand_id: data.brand_id,
        category_id: data.category_id,
        subcategory_id: data.subcategory_id,
        variants: {
          deleteMany: {}, 
          create: data.variants
            ? data.variants.map((variant) => ({
                name: variant.name,
                skus: variant.skus
                  ? {
                      create: variant.skus.map((sku) => ({
                        size: sku.size,
                        stock: sku.stock,
                        code: sku.code,
                        price: sku.price,
                        multiple_quantity: sku.multiple_quantity,
                        price_tables_skus: sku.price_tables
                          ? {
                              create: sku.price_tables.map((pt) => ({
                                price_table_id: pt.price_table_id,
                                price: pt.price,
                              })),
                            }
                          : undefined,
                      })),
                    }
                  : undefined,
              }))
            : undefined,
        },
      },
      include: {
        variants: {
          include: {
            skus: {
              include: { price_tables_skus: true },
            },
          },
        },
      },
    })
  }
}