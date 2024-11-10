const http = require('node:http')

// commonJS -> MODULOS CLASICOS DE NODE
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset =utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404</h1>')
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = '' // Cambia const por let
          // Escuchar el evento 'data'
          req.on('data', chunk => {
            body += chunk.toString()
          })

          // Escuchar el evento 'end'
          req.on('end', () => {
            try {
              const data = JSON.parse(body)
              res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
              res.end(JSON.stringify(data))
            } catch (error) {
              res.statusCode = 400 // Error de formato JSON
              res.end(JSON.stringify({ error: 'Invalid JSON format' }))
            }
          })

          break
        }

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not Found')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('server listening on port http:localhost:1234')
})
