import { prisma } from "../../../database/prisma"

export class DeleteProductBdd { 
    async SoftDeleteBdd(id: number){
        //console.log(id);
        

        return prisma.products.update({
            where: {
                id: id
            },
            data:{
                deleted_at: new Date()
            }
        })
    }
}