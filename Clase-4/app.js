import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

app.get('/movies', todo)

app.get('/movies/:id', todo)

app.post('/movies', todo)

app.delete('/movies/:id', todo)

app.patch('/movies/:id', todo)

app.use('/movies', moviesRouter)
const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
