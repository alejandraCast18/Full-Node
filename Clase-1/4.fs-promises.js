const fs = require('node:fs/promises')
//const {promisify} = require('node:util')//

/* con promisify se puede crear una accion de promesa en una accion que no es de promesa, es decir solo en los modulos nativos que no tienen promesas nativas */

//const readFilePromise = promisify(fs.readFile)//

/* const text = fs.readFileSync('./archivo.txt') al hacerlo de esta manera solo da un buffer de memoria que es innecesario,
al agregarle 'utf-8' estamos pidiendo que la codificacion nos lo convierta a un sistema para poder entenderlo a leer*/
/* readFileSync = es la manera sincrona, readFile = es la manera asincrona, cuando es sincrono bloquea al esperar respuesta de la tarea, de la manera asincrona siempre sera mas optima */ 


/*fs/promises se utiliza para que en lugar de usar callbacks((err,text) =>, utilice promesas que se usa para el codigo asincrono)*/


console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8')
.then(text =>{
    console.log('primer texto:',text)
})

console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8') 
.then(text=>{
    console.log('segundo texto:', text)
})