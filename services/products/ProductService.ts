import { paginacao } from "../../utils/paginacao"
import { ProductBdd } from "./ProductBdd"
import { ProductRules } from "../Rule/ProductRule"
import { ListProductParams } from "../../models/DTOs"



export class ProductService {
    private repository = new ProductBdd()

    async list({page = 1, limit = 20}: ListProductParams){
        console.log("Page:", page, "limit:", limit); //TEMPORARIO
        
        const {skip, take} = paginacao(page, limit)

        const products = await this.repository.GetAll({ skip, take })
        return ProductRules.filterVarPrices(products)
    }
}