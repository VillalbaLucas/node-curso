import process from 'node:process';
 


process.on('beforeExit', (code)=>{
    console.log('Process beforeExit', code)
})

console.log('variable de entorno: ', process.env.IN)
console.log('Plantform: ', process.platform)
console.log(process.pid)