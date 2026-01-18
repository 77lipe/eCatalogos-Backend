import { prisma } from "../../database/prisma"

export class CountProductsBdd {
    async execute(): Promise<number> {
        return prisma.products.count({
            where: {
                deleted_at: null
            }
        })
    }
}