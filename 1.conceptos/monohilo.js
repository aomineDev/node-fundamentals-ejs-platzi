console.log('Hola mundo')

let i = 0

setInterval(() => {
  // Este proceso al ser asincrono se ejecuta al final
  console.log(i)

  if (i === 3) {
    throw new Error('fallo intencional')
  }

  i++
}, 1000)

console.log('Segunda Instrucción')
