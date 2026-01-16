import { prisma } from '../../database/prisma'

export class ProductBdd {
    async GetAll({ skip, get }: { skip: number, get: number}) {
        return prisma.products.findMany({
            where: {deleted_at: null},
            include: {
                variants: {
                    include:{
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