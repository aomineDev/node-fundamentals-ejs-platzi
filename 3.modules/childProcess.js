const { exec, spawn } = require('child_process')

// exec('node console.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error('Ah ocurrido un error')
//     return
//   }

//   console.log(stdout)
// })

const myProcess = spawn('ls', ['-la'])

console.log(myProcess.pid)
console.log(myProcess.connected)

myProcess.stdout.on('data', data => {
  console.log('¿Está muerto?: ' + myProcess.killed)
  console.log(data.toString())
})

myProcess.on('exit', () => {
  console.log('El proceso termino')
  console.log('¿Está muerto?: ' + myProcess.killed)
})