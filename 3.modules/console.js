// console.log('Algo')
// console.info('Info')
// console.warn('Warning')
// console.error('Error')

// ------------------------------------------------------
// CONSOLE TABLE

// const table = [
//   {
//     a: 1,
//     b: 'z'
//   },
//   {
//     a: 2,
//     b: 'x'
//   }
// ]

// console.table(table)

// ------------------------------------------------------
// CONSOLE GROUP

// console.group('Conversación:')
// console.log('Hola')
// console.group()
// console.log('Bla bla bla...')
// console.log('Bla bla bla...')
// console.log('Bla bla bla...')
// console.groupEnd()
// console.log('Adios.')
// console.groupEnd()

// console.log('Otra cosa de otro lado')

// ------------------------------------------------------
// CONSOLE GROUP EN CASO REAL

// function functionOne () {
//   console.group('función 1')
//   console.log('esto esta en la función 1')
//   console.log('esto tambien')
//   console.log('y esto xD')
//   functionTwo()
//   console.log('Hemos vuelto a la función 1')
//   console.groupEnd()
// }

// function functionTwo () {
//   console.group('función 2')
//   console.log('esto esta en la función 2')
//   console.log('y esto :v')
//   console.groupEnd()
// }

// console.log('Empezamos')
// functionOne()
// console.log('Terminamos')

// ------------------------------------------------------
// CONSOLE COUNT

console.log('Empezamos a contar')
console.count('veces')
console.count('veces')
console.count('veces')

console.log('Reiniciamos')
console.countReset('veces')
console.count('veces')
console.count('veces')