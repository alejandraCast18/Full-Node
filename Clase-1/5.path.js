const path = require('node:path')

/*barra que separa las carpetas segin los SO*/
console.log(path.sep)

/* las rutas se unen con path.join */
const filePath = path.join('content','subfolder','test')
console.log(filePath)

/* basename da el nombre del fichero*/
const base = path.basename('/tmp/ale-raul-files/password.txt')
console.log(base)

/* con filename busca el nombre del fichero y quita la extension*/
const filename = path.basename('/tmp/ale-raul-files/password.txt', '.txt')
console.log(filename)

/*para dar la extension*/
const extension = path.extname('perro.perro.jpg')
console.log(extension)