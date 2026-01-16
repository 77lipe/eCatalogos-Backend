export interface PriceTableSku {
    price_table_id: number
}

export interface Sku {
    price_tables_skus?: PriceTableSku | null 
}

export interface Variant {
    skus: Sku[]
}

export interface Product {
    variants: Variant[]
}