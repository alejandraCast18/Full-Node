const fs = require('node:fs')

console.log('leyendo el primer archivo')
const text = fs.readFile('./archivo.txt', 'utf-8') 
console.log('primer texto:',text)


console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
const secondtext = fs.readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondtext)