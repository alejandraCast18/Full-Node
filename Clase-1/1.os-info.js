const os = require('node:os')

console.log('Nombre del sistema operativo', os.platform())
console.log('version del sistema operativo', os.release())
console.log('arquitectura', os.arch())
console.log('cpus', os.cpus())
console.log('memoria libre', os.freemem()/1024/1024)
console.log('memoria total', os.totalmem()/1024/1024)
console.log('uptime', os.uptime()/60/60)