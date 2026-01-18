import { Request, Response} from 'express'
import { ProductService } from '../services/products/ProductService' //Rota não existe ainda 

export class ProductController {
    private service = new ProductService()

    list = async (req: Request, res: Response) => {
        console.log('QUERY', req.query); // TEMPORARIO
        
        try {

            const { page, limit } = req.query
            
            const products = await this.service.list({page: Number(page), limit: Number(limit)})
            return res.json(products)

        } catch (err: any) {
            return res.status(500).json({error: err.message})
        }
    }
}