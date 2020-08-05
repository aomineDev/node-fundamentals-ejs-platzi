// const process = require('process')

process.on('beforeExit', () => {
  console.log('El proceso va a terminar.')
})

setTimeout(() => {
  console.log('Esto si se vera')
}, 0)

process.on('exit', () => {
  console.log('Ale, el proceso ha terminado.')
  setTimeout(() => {
    console.log('Esto no se va a ejecutar nunca')
  }, 0)
})

process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error.')
  // console.error(err)
  setTimeout(() => {
    console.log('Esto viene desde las excepciones')
  }, 0)
})

throw new Error('Error intencional')

console.log('Esto si el error no se recoje no sale')