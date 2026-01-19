import { ProductPostBdd } from "./PostProductBdd"
import { Product } from "../../../models/ProductInput"

export class ProductPostService {
    private repository = new ProductPostBdd()
    
    async createProductService(data: Product){

        const product = await this.repository.createProduct(data)
        return product
    }
}