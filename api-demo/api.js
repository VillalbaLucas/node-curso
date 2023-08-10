import  cors  from 'cors'
import express from 'express';
// import movies from './movies.json' with {type:'json'}
import { movieRouter } from './routes/movies.js'

const app = express();

app.use(cors())
app.disable('x-powered-by');

//para dirigirlo al router especifico
app.use('/movies', movieRouter)


//crea el puerto y levanta el servidor en ese puerto
const PORT = process.env.PORT ?? 1234
app.listen(PORT, () => {
    console.log(`Listen server in: http://localhost:${PORT}`)
})
