// Importando file system
const fs = require('fs')
const content = 'Soy un archivo nuevo creado desde node'

// ------------------------------------------------------
// READ FILE

function read (route, cb) {
  fs.readFile(route, (err, data) => {
    // archivo leido
    console.log(data.toString())
    cb()
  })
}

// read(__dirname + '/file.txt', () => {})

// ------------------------------------------------------
// WRITE FILE

function write (route, content, cb) {
  fs.writeFile(route, content, err => {
    if (err) console.error('No he podido escribirlo ' + err)
    else cb(route)
  })
}

// write(__dirname + '/test.txt', content, () => {
//   console.log('El archivo se ha escrito correctamente')
// })

// ------------------------------------------------------
// DELETE FILE

function remove (route, cb) {
  fs.unlink(route, cb)
}

// remove(__dirname + '/test.txt', () => {
  // console.log('Archivo eliminado correctamente')
// })

// ------------------------------------------------------

write(__dirname + '/test.txt', content, route => {
  console.log('El archivo se ha escrito correctamente')
  read(route, () => {
    remove(route, () => {
      console.log('Archivo eliminado correctamente')
    })
  })
})
