export interface PriceTableSkuInput {
  price_table_id: number
  price: number
}

export interface SkuInput {
  id?: number
  size: string
  stock: number
  code: string
  price: number,
  multiple_quantity: number
  price_tables?: PriceTableSkuInput[]
}

export interface VariantInput {
  id?: number
  name: string
  hex_code?: string
  skus?: SkuInput[]
}

export interface Product {
  name: string
  reference: string
  type: "NACIONAL" | "IMPORTADO"
  gender: "MASCULINO" | "FEMININO" | "INFANTIL" | "JUVENIL" | "UNISSEX" | "FAT" | "OUTRO"
  company_id: number
  brand_id: number
  category_id: number
  subcategory_id?: number
  prompt_delivery: boolean
  variants?: VariantInput[]
  description: string
}
