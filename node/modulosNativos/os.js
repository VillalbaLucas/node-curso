const os = require('node:os')

console.log('Nombre del sistema operativo:', os.platform())
console.log('CPUs:', os.cpus())
console.log('Nucleos CPUs:', os.cpus().length)
console.log(os.userInfo() )