/* .js > por defecto utiliza common js
.mjs > es para utilizar ECMA SCRIPT "ES" modules
.cjs > para utiliar commonjs */

import {sum, sub, mult, div} from './sum.mjs'

console.log(sum(1,2))
console.log(sub(2,2))
console.log(mult(4,2))
console.log(div(8,2))