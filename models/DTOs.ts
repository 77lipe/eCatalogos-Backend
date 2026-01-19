export interface CategoryFilter{ 
    category: number,
    subcategory?: number,
    company_id: number
}

export interface ListProductParams {
    page?: number,
    limit?: number
}

export interface IdProductPrm{
    productId: string
}
