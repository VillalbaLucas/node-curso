import { sep, join, basename } from 'node:path'

console.log(sep)
const filePath = join('folder', 'src', 'index.ex')
console.log('Creacion de ruta: ', filePath)


const base = basename(filePath)
console.log('Nombre del archivo base: ', base)