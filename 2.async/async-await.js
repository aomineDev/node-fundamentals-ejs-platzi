function sayHello (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola ' + name)
      resolve(name)
    }, 1000)
  })
}

function talk () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla...')
      // resolve()
      reject(new Error('Error intencional'))
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
// ASYNC - AWAIT


async function main () {
  try {
    const name = await sayHello('aomine')
    await talk()
    await talk()
    await talk()
    await sayGoodBye(name)
    console.log('Finalizando proceso...')
  } catch (error) {
    console.error('Ha ocurrido un error: ' + error.message)
    console.error('Proceso interrumpido...')
  }
}

console.log('Iniciando proceso...')
main()
