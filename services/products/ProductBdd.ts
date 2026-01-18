import { prisma } from '../../database/prisma'

export class ProductBdd {
    async GetAll({ skip, take }: { skip: number, take: number}) {
        console.log("skip:", skip, "Take:", take);
        
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