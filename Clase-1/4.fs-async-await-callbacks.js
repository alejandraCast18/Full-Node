const {readFile} = require('node:fs/promises') ;

/* para que funcione con js se usa una IIFE - Inmediatly Invoked Function Expression*/
/*(
    async () =>{
        console.log('leyendo el primer archivo')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:',text)

console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
const secondtext = await readFile('./archivo2.txt', 'utf-8') 
console.log('segundo texto:', text) 

    }
)()*/

/* para hacerlo mas directo se usa init()*/

async function init() {
    console.log('leyendo el primer archivo')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:',text)

console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
const secondtext = await readFile('./archivo2.txt', 'utf-8') 
console.log('segundo texto:', text) 
    
}
init()
