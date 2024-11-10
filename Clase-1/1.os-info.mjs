import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Nombre del sistema operativo', platform())
console.log('version del sistema operativo', release())
console.log('arquitectura', arch())
console.log('cpus', cpus())
console.log('memoria libre', freemem()/1024/1024)
console.log('memoria total', totalmem()/1024/1024)
console.log('uptime', uptime()/60/60)