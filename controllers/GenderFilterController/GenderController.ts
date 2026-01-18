import { Request, Response } from "express"
import { GenderFilter } from "../../services/Filters/GenderFilter/GenderService"

export class GenderController {
    private service = new GenderFilter()

    FilterGender = async(req: Request, res: Response) => {
        const { gender } = req.query

        if( gender != null || gender != undefined || gender != ""){

            const productsGender = await this.service.execute(String(gender))
            if(productsGender.length == 0 ){

                return res.json("Gênero não encontrado!!")
            }else{

                return res.json(productsGender)
            }
        }
    }
}