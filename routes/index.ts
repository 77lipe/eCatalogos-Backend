import { Router } from 'express'

const router = Router()

router.get('/TEST', (req, res) => {
    res.json({message: "Teste de Rotas"})
})

export default router