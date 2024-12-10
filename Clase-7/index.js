import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import path from 'path'
import { fileURLToPath } from 'url'
import { UserRepository } from './db /user-repository.js'
import { JWT_SECRET, PORT } from './db /config.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token
  if (!token) return res.redirect('/')

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.redirect('/')
    req.user = user
    next()
  })
}

app.get('/', (req, res) => {
  res.render('index', { user: null })
})

app.post('/register', (req, res) => {
  const { username, password } = req.body

  try {
    const userId = UserRepository.create({ username, password })
    res.status(201).send(`Usuario registrado con éxito. ID: ${userId}`)
  } catch (error) {
    res.status(400).send(error.message);
  }
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await UserRepository.login({ username, password })
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true })
    res.redirect('/protected')
  } catch (error) {
    res.status(401).send(error.message)
  }
})

app.get('/protected', authenticateToken, (req, res) => {
  res.render('protected', { user: req.user })
})

app.get('/logout', (req, res) => {
  res.clearCookie('token')
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
