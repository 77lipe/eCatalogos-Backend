import { prisma } from "../../../database/prisma"

export class BrandBdd{
    async execute(brandName: string){
        console.log("Marca recebida:", brandName);
        

        return prisma.products.findMany({
            where: {
                deleted_at: null,
                brands: {
                    name: brandName.trim()
                }    
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