import { DeleteProductBdd } from "./DeleteProductBdd"

export class SoftDeleteProductService { 
    private repository = new DeleteProductBdd()

    async softDeleteService(id: number){

        const resultDelete = await this.repository.SoftDeleteBdd(id)
        //console.log(resultDelete)

        return (resultDelete)
    }
}