import { products_gender } from "@prisma/client"
import { prisma } from "../../../database/prisma"

export class GenderBdd{
    async execute(genderName: string){
        const gender = genderName.toUpperCase() as products_gender
        
        return prisma.products.findMany({
            where:{
                deleted_at: null,
                gender: gender
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