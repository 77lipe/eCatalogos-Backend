import { prisma } from "../../../database/prisma"
import { CategoryFilter } from "../../../models/DTOs"



export class CategoryFilterBdd {
    async execute({ category, subcategory }: CategoryFilter) {
        
        const categoryName = category.toUpperCase()
        
        const subCategoryName = subcategory?.toUpperCase()

        return prisma.products.findMany({
            where: {
                deleted_at: null,
                categories:{
                    name: categoryName 
                },
                ...(subcategory && {
                    subcategories: {
                        name: subCategoryName
                    }
                })
            }, 
            include:{
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