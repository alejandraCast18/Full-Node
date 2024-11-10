const fs = require('node:fs')

//node es monohilo solo tiene un proceso, esta basado en eventos, podemos hacer las cosas de forma sincrona, por lo tanto puede bloquear un proceso, o asincrona donde utiliza la arquitectura de eventos, donde hace un sistema de lectura y escritura donde mientras esta leyendo todo fuera del hilo, toma un tiempo de espera para recibir la informacion */

//sincrono//

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
    stats.mode,
)


