import { ProductIdService } from "../../services/products/ProductById/ProductByIdService"
import { Request, Response } from "express"

export class ProductIdController { 
    private service = new ProductIdService()

    getParams = async (req: Request, res: Response) =>{
        const {productId} = req.params
        const id = Number(productId)

        if(id != null || id != undefined || id || ""){
            const products = await this.service.execute(id)
            if(products.length > 0 ){
                return res.json(products)
            }else{
                return res.json("ERROR: Nenhum Produto encontrado!!")
            }
        }else{

            return res.json("Nenhum parâmetro encontrado!!")
        }
    }
}