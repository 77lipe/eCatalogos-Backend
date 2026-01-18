import { Request, Response } from "express";
import { CountProductService } from "../../services/CountProducts/CountProductService"

export class CountController { 
    private service = new CountProductService()

    counter = async (_req: Request, res: Response) => {
        const total = await this.service.execute()
        return res.json(`Total de Produtos: ${total}`)
    }
}