import { Request, Response } from "express"
import { putProductService } from "../../services/products/PutProduct/PutProductService"

export class PutProductController {
    private service = new putProductService()

    putProduct = async (req: Request, res: Response) =>{

        try {

            const {id} = req.params
            const data = req.body

            const idProduct = Number(id)

            if(id != null || id != undefined || id != "" ){

                if(data != null || data != undefined || data != ""){
                    const resultPut = await this.service.execute(idProduct, data)
                    if(resultPut){
                
                        return res.json("Produto alterado com SUCESSO!!")
                    }else{
                        return res.status(400).json({message: "Não foi possível atualizar este produto"})
                    }
                }else{
                    return res.status(400).json({message: "Nenhum DADO recebido na Requisição"})
                }

            }else{
                return res.status(400).json({message: "Nenhum ID recebido na Requisição"})
            }
        } catch (error) {
            return console.error(error)
        }
    }
}