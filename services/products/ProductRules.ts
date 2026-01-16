import { Product } from "../../models/ProductRule.model"

export class ProductRules {
    static filterVarPrices(products: Product[]): Product[] {
        
        return products

        .map((product) => {
            const varValids = product.variants.filter((variant) => {
                const priceTables = variant.skus.map(
                    (sku) => sku.price_tables_skus?.price_table_id
                )

                return new Set(priceTables).size === 1
            })

            return{
                ...product,
                variants: varValids
            }
        })

        .filter((product) => product.variants.length > 0)
    }
}