import {readFile} from 'node:fs/promises' 

/* ecma script modules  usa los await porque tienen el soporte en todo el cuerpo del archivo se le define top model await, hay que tener en cuenta que common js no se puede*/

console.log('leyendo el primer archivo')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:',text)

console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
const secondtext = await readFile('./archivo2.txt', 'utf-8') 
console.log('segundo texto:', text) 