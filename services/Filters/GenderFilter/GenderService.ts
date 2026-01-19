import { GenderBdd } from "./GenderBdd"
import { ProductRules } from "../../Rule/ProductRule"

export class GenderFilter {
    private repository = new GenderBdd()

    async execute(genderName: string){

        const products = await this.repository.execute(genderName)
        return ProductRules.filterVarPrices(products)
    }
}