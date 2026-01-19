export interface CategoryFilter{ 
    category: string,
    subcategory?: string
}

export interface ListProductParams {
    page?: number,
    limit?: number
}