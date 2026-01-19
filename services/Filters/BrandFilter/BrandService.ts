import { BrandBdd } from "./BrandBdd"
import { ProductRules } from "../../Rule/ProductRule"

export class BrandFilter{
    private repository = new BrandBdd()

    async execute(brandName: string){

        const products = await this.repository.execute(brandName) 
        return ProductRules.filterVarPrices(products)
    }
}