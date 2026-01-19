import { ProductIdBdd } from "./ProductByIdBdd"
import { IdProductPrm } from "../../../models/DTOs"
import { ProductRules } from "../../Rule/ProductRule"

export class ProductIdService { 
    private repository = new ProductIdBdd()

    async execute(id: number){  
        
        const products = await this.repository.getIdProduct(id)        
        return ProductRules.filterVarPrices(products)
    }
}