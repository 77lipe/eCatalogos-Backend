/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as rotas e end-points
 * 
 * Instalações necessárias:
 *     Para criar a API precisamos instalar:
 *          * express           npm install express --save
 *          * cors              npm install cors --save
 *          * body-parser       npm install body-parser --save
 *
 *      Para criar a integração com o Banco de Dados precisamos instalar:
 *          * prisma            npm install prisma --save           (para fazer conexão com o BD)
 *          * prisma/client     npm install @prisma/client --save   (para rodar os scripts SQL)
 *        
 * 
 *            Após a instalação do prisma e do prisma client, devemos:
 *              npx prisma init
 *            Você deverá configurar o arquivo .env e schema.prisma com as credenciais do BD
 *            Após essa configuração deverá rodar o seguinte comando:
 *               npx prisma migrate dev
 * 
 * 
 **************************************************/

import express from "express"
import productRoutes from './routes/product.routes'

const app = express()
app.use(express.json())

app.use('/ecatalogos', productRoutes)



export default app