const os = require('os')

// Arquitectura del sistema operativo
console.log(os.arch())

// Sistema opeativo
console.log(os.platform())

// Nucleos de nuestro procesador
// console.log(os.cpus())

// Cantidad de nucleos en nuestro procesador 
console.log(os.cpus().length)

// Todos los erroes y señales del sistema
// console.log(os.constants)

// Cantidad de memoria RAM disponible
const SIZE = 1024

const kb = bytes => (bytes / SIZE)
const mb = bytes => (kb(bytes) / SIZE)
const gb = bytes => (mb(bytes) / SIZE)


console.log(os.freemem() + ' bytes')
console.log(kb(os.freemem()) + ' kb')
console.log(mb(os.freemem()) + ' mb')
console.log(gb(os.freemem()) + ' gb')

// Cantidad de memoria RAM
console.log(gb(os.totalmem()) + ' gb')

// Directorio raiz
console.log(os.homedir())

// Directorio temporal
console.log(os.tmpdir())

// Nombre del host de la pc
console.log(os.hostname())

// Interfaces de red activas en mi maquina
// console.log(os.networkInterfaces())