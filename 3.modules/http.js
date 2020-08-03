const http = require('http')

function router (req, res) {
  console.log('Nueva petición!')
  console.log(req.headers.host)
  console.log(req.url)

  // Escribir respuesta
  res.writeHead(201, {
    'Content-Type': 'text/plain'
  })

  switch (req.url) {
    case '/hello':
      res.write('Bienvenidos a mi server HTTP con Node.js :D !!!')
    break
    case '/godbye':
      res.write('Adios :(')
    break
    default:
      res.write('Error 404: No se lo que quieres')
    break
  }

  res.end()
}

http.createServer(router).listen(3000)

console.log('Escuchando http en el puerto 3000')