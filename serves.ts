import app from './app'

const PORT = Number(process.env) || 3030
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})