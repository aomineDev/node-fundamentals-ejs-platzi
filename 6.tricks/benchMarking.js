console.time('all')

let result = 0

console.time('bucle one')
for (let i = 0; i < 1000000; i++) {
  result++
}
console.timeEnd('bucle one')

let resultTwo = 0

console.time('bucle two')
for (let i = 0; i < 100; i++) {
  resultTwo++
}
console.timeEnd('bucle two')

console.time('async')
console.log('Empieza el proceso asincrono')

asyncronius()
  .then(resolve => {
    console.log(resolve)
    console.timeEnd('async')
  })

console.timeEnd('all')

function asyncronius () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('termino el proceso asincrono')
    }, 2000)
  })
}
