import { CategoryFilterBdd } from "./CategoryBdd"
import { CategoryFilter } from "../../../models/DTOs"
import { ProductRules } from "../../Rule/ProductRule"

export class CategoryService { 
    private repository = new CategoryFilterBdd()

    async execute(params: CategoryFilter){
        const products = await this.repository.execute(params)
        //console.log(products);
        
        return ProductRules.filterVarPrices(products)
    }
}