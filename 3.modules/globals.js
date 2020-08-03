// Object global
// console.log(global)

// function setInterval
// console.log(setInterval)

// ------------------------------------------------------
// FUNCIONES GLOBALES

let i = 1

const interval = setInterval(() => {
  console.log(`Hola ${i} ${i === 1 ? 'vez' : 'veces'}`)

  if (i === 3) {
    clearInterval(interval)
    console.log('Intervalo finalizado')
    return
  }
  
  i++
}, 1000)

setImmediate(() => {
  console.log('Hola')
})

// ------------------------------------------------------
// VARIABLES GOLBALES

// La variable global process
// console.log(process)

// El directorio donde esta ubicado nuestro archivo
console.log(__dirname)

// El nombre del archivo donde estamos
console.log(__filename)

// ------------------------------------------------------
// CUSTOM VARIABLE GOLBAL

global.myVariable = 'mi variable global'

console.log(myVariable)
