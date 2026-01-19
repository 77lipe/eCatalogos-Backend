import { CategoryFilterBdd } from "./CategoryBdd"
import { CategoryFilter } from "../../../models/DTOs"
import { ProductRules } from "../../products/ProductRule"

export class CategoryService { 
    private repository = new CategoryFilterBdd()

    async execute(params: CategoryFilter){
        const products = await this.repository.execute(params)
        return ProductRules.filterVarPrices(products)
    }
}