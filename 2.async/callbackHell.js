function sayHello (name, myCallback) {
  setTimeout(() => {
    console.log('Hola ' + name)
    myCallback(name)
  }, 1000)
}

function talk (callback) {
  setTimeout(() => {
    console.log('Bla bla bla...')
    callback()
  }, 1000)
}

function sayGoodBye (name, anotherCallback) {
  setTimeout(() => {
    console.log('Adios ' + name)
    anotherCallback()
  }, 1000)
}

function conversation (name, repetitions, callback) {
  if (repetitions > 0) {
    talk(() => {
      conversation(name, --repetitions, callback)
    })
  } else {
    sayGoodBye(name, callback)
  }
}

// ------------------------------------------------------
// RECURSIVIDAD

console.log('Iniciando proceso...')

sayHello('aomine', name => {
  conversation(name, 3, () => {
      console.log('Finalizando proceso...')
  })
})

// ------------------------------------------------------
// CALLBACK HELL

// console.log('Iniciando proceso...')

// sayHello('aomine', name => {
//   talk(() => {
//     talk(() => {
//       talk(() => {
//         talk(() => {
//           talk(() => {
//             sayGoodBye(name, () => {
//               console.log('Finalizando proceso...')
//             })
//           })
//         })
//       })
//     })
//   })
// })
