import {readFile} from 'node:fs/promises' 
import test from 'node:test'

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]) .then(([text,secondtext])=>{
console.log('primer texto', text)
console.log('segundo texto', secondtext)
})
