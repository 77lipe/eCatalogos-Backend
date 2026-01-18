import { prisma } from '../../database/prisma'

export class ProductBdd {
    async GetAll({ skip, take }: { skip: number, take: number}) {
        return prisma.products.findMany({
            skip,
            take,
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