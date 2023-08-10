import fs from 'node:fs/promises';
import path from 'node:path'

// const stats = fs.statSync('./input.txt')

//forma syncrona sin promises colocando un callback
// fs.readFile('./input.txt', 'utf-8', (err, data) =>{
//     try {
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// })

// console.log(
//     stats.isFile(),
//     stats.isDirectory()
// )
const archivo = './archivos/input.txt'
async function info(archivo){
    try{
        const filePath = path.dirname(archivo)
        const stat =  await fs.stat(filePath)
        const isFile = stat.isDirectory()? 'd':'f'
        
        console.log('Info del archivo: \n',
            isFile , path.basename(archivo)
        )
    }
    catch(err){
        console.log(err)
    }
}
info(archivo)

// fs.readFile()
//     .then(data => {
//             console.log(data)
//             console.log('Fs data:', fs.stat(data))
//     })
