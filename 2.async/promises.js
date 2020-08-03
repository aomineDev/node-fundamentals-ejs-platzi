function sayHello (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola ' + name)
      resolve(name)
    }, 1000)
  })
}

function talk (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla...')
      // resolve(name)
      reject(new Error('Error intencional...'))
    }, 1000)
  })
}

function sayGoodBye (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios ' + name)
      resolve()
    }, 1000)
  })
}

// ------------------------------------------------------
// PROMISES

// .then(name => sayGoodBye(name)) == .then(sayGoodBye)

console.log('Iniciando proceso...')

sayHello('aomine')
  .then(talk)
  .then(talk)
  .then(talk)
  .then(sayGoodBye)
  .then(() => console.log('Finalizando proceso...'))
  .catch(error => console.error('Ha ocurrido un error: ' + error.message))