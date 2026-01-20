import { Request, Response } from "express";
import { SoftDeleteProductService } from "../../services/products/DeleteProduct/DeleteProductService"

export class softDeleteController {
    private service = new SoftDeleteProductService()
    
    softDelete = async (req: Request, res: Response) => {
        
        const id = req.params
        //console.log(id.id);
        const productId = Number(id.id)
        

        if(productId != null || productId != undefined || productId != "") {

            const resultSoftDelete = await this.service.softDeleteService(productId)
            if(resultSoftDelete){
                
                return res.status(200).json("Delete realizado com sucesso!!")
            }else{
                return res.status(400).json({message: "NÃO foi possível deleter este PRODUTO!!"})
            }
        }
    }
}