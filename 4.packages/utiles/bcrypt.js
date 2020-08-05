const bcrypt = require('bcrypt')

const password = '1234Segura!'

bcrypt.hash(password, 4, (err, hash) => {
  if (err) console.error('Ha ocurrido un error')
  else {
    console.log(hash)
    bcrypt.compare('password', hash, (err, res) => {
      if (err) console.error('La contraseña no coincide')
      else console.log('La contraseña ' + (res ? 'SI' : 'NO') + ' coincide')
    })
  }
})