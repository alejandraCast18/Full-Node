const http = require('node:http')
const fs = require('node:fs')

const desiredport = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf8')

  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página</h1>')
  } else if (req.url === '/imagen-perfecta.png') {
    fs.readFile('./Clase-2/raul.png', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err)
        res.statusCode = 500
        res.end('<h1>Error interno del servidor</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404 - Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredport, () => {
  console.log(`Servidor escuchando en http://localhost:${desiredport}`)
})
