import { paginacao } from "../../utils/paginacao."
import { ProductBdd } from "./ProductBdd"
import { ProductRules } from "./ProductRules"

interface ListProductParams {
    page?: number,
    limit?: number
}

export class ProductService {
    private repository = new ProductBdd()

    async list({page = 1, limit = 15}: ListProductParams){
        const {skip, get} = paginacao(page, limit)

        const products = await this.repository.GetAll({ skip, get })
        return ProductRules.filterVarPrices(products)
    }
}