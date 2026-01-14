import { prisma } from '../database/prisma'

export class ProductService {
    async list() {
        const products = await prisma.products.findMany({
            where: { deleted_at : null},
            include: {
                variants: {
                    include: {
                        skus: true
                    }
                }
            }
        })
        return products
    }
}