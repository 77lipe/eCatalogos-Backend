import { Request, Response} from 'express'
import {ProductService} from '../services/ProductService' //Rota não existe ainda 

export class ProductController {
    private service = new ProductService()

    list = async (req: Request, res: Response) => {
        try {
            
            const products = await this.service.list()
            return res.json(products)

        } catch (err: any) {
            return res.status(500).json({error: err.message})
        }
    }
}