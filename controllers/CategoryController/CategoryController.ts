import { Request, Response } from "express"
import { CategoryService } from "../../services/Filters/CategoriesFilter/CategoryService"

export class CategoryController { 
    private service = new CategoryService()

    filterCategory = async (req: Request, res: Response) => {

        const {category, subcategory, company_id} = req.query
        console.log(category, subcategory, company_id);
        
        if(category != null || category != undefined || category != ""){

            const products = await this.service.execute({
                category: Number(category),
                subcategory: Number(subcategory),
                company_id: Number(company_id)
            })

            if( products.length == 0){
                return res.json("Nenhum Produto encontrado!!")
            }else{
                 return res.json(products)
            }
            
        }else{

            return res.json("Nenhuma Categoria Selecionada!!")
        }
    }
}