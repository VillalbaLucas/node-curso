const express = require('express')
const app = express()

const PORT = 1234

//Es un middleware que hace algo cuando recibe una peticion y devuelve con next()
//Puede ser un method especifico con app.{method} y se aplicara a ese method
//Puedes agregarle la ruta a cual quieres que se aplique app.use('routing',(req, res)) =>
app.use((req, res) => {

})

app.get('/', (req, res) => {
    res.status(200).send('<h1>Api Express</h1>')
})

//Escucha el puerto para levantar el servidor en ese puerto
app.listen(PORT, () => {
    console.log(`server listen http://localhost:${PORT}`)
})