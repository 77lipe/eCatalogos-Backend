import { UpdateProductBdd } from "./PutProductBdd"
import { Product } from "../../../models/ProductInput"

export class putProductService {
    private repository = new UpdateProductBdd()

    async execute(id: number, data: Product){

        const uputProduct = await this.repository.updateProduct(id, data)
        return uputProduct
    }
}