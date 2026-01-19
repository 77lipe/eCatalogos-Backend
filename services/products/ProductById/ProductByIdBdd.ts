import { prisma } from "../../../database/prisma"

export class ProductIdBdd {
    async getIdProduct(idProduct: number){
        return prisma.products.findMany({
            where: {
                deleted_at: null,
                id: Number(idProduct)
            },
            include: {
                variants: {
                    include: {
                        skus: {
                            include: {
                                price_tables_skus: true
                            }
                        }
                    }
                }
            }
        })
    }
}