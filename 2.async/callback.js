function iAmAsync () {
  setTimeout(() => {
    console.log('Estoy siendo asincrono')
  }, 1500)
}

function sayHello (name, myCallback) {
  setTimeout(() => {
    console.log('Hola ' + name)
    myCallback(name)
  }, 1500)
}

function goodBye (name, anotherCallback) {
  setTimeout(() => {
    console.log('Adios ' + name)
    anotherCallback()
  }, 1000)
}

console.log('Iniciando proceso...')

sayHello('aomine', name => {
  goodBye(name, () => {
    console.log('FInalizando proceso...')
  })
})

// sayHello(name, () => {})
// goodBye(name, () => {})