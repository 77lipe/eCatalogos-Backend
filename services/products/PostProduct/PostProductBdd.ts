import { prisma } from "../../../database/prisma"
import { Product } from "../../../models/ProductInput"

export class ProductPostBdd {
  async createProduct(data: Product) {
    return prisma.products.create({
      data: {
        name: data.name,
        reference: data.reference,
        type: data.type,
        gender: data.gender,
        company_id: data.company_id,
        brand_id: data.brand_id,
        category_id: data.category_id,
        subcategory_id: data.subcategory_id,
        prompt_delivery: data.prompt_delivery ?? false,
        variants: data.variants?.length
          ? {
              create: data.variants.map((variant) => ({
                name: variant.name,
                skus: variant.skus?.length
                  ? {
                      create: variant.skus.map((sku) => ({
                        size: sku.size,
                        stock: sku.stock,
                        code: sku.code,
                        price: sku.price ?? 0,
                        multiple_quantity: 1, 
                        price_tables_skus: sku.price_tables?.length
                          ? {
                              create: sku.price_tables.map((pt) => ({
                                price_table_id: pt.price_table_id,
                                price: pt.price,
                              })),
                            }
                          : undefined
                      })),
                    }
                  : undefined
              })),
            }
          : undefined
      },
      include: {
        variants: {
          include: {
            skus: {
              include: {
                price_tables_skus: true,
              },
            },
          },
        },
      },
    })
  }
}

