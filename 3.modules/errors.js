function anotherFunction () {
  return generateError()
}

function generateError () {
  throw new Error ('Error intencional')
}


// try {
//   anotherFunction()
// } catch (error) {
//   console.error('Ocurrio un Eror: ' + error.message)
//   console.log('Pero no pasa , lo hemos capturado')
// }

// console.log('El proceso continua sin romperse')

// ------------------------------------------------------

function asyncError (cb) {
  setTimeout(() => {
    try {
      throw new Error ('Error asincrono intencional') 
    } catch (error) {
      console.error('Error capturado')
      cb(error.message)
    }
  }, 1000)
}

console.log('Iniciando proceso...')

asyncError(err => {
  console.error(err)
})
