const http = require('node:http')
const {findAvailablePort} = require('./10.free-port.js')

const desiredport = process.env.PORT ?? 3000

const server = http.createServer((req, res)=>{
    console.log('request received')
    res.end('Raul Armando')
})

findAvailablePort(desiredport).then(port => {
    server.listen(port,() =>{
        console.log(`server listening on port http://localhost:${port}`)
    })
})