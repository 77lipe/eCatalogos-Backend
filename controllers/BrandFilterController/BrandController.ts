import { Request, Response} from 'express'
import { BrandFilter } from '../../services/Filters/BrandFilter/BrandService'

export class BrandController { 
    private service = new BrandFilter()

    filterBrand = async (req: Request, res: Response) => {
        const { brand } = req.query

        if(brand != null || brand != "" || brand != undefined){

            const productsBrand = await this.service.execute(String(brand)) 
            if (productsBrand.length == 0){
                
                return res.json(`Nenhuma Marca encontrada`)
            }else{
                return res.json(productsBrand)
            }         

        }else{
            return res.json("Nenhum marca Solicitado ou Encontrada")
        }
    }
}