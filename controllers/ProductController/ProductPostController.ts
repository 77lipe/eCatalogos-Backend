import { Request, Response } from "express"
import { ProductPostService } from "../../services/products/PostProduct/PostProductService"

export class ProductPostController {
    private service  = new ProductPostService()

    ProductController= async (req: Request, res: Response) =>{
        try {
            
            const data = req.body
            if(data != null || data != undefined || data != ""){

                const product = await this.service.createProductService(data)
                if(product){
                    return res.json(product)
                }else{
                    return res.status(400).json({error: "Erro ao CADASTRAR novo produto",
                        message: Error
                    })
                }
            }
        } catch (error) {
            return console.error(error)            
        }
    }
}