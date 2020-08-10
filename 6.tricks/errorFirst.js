function asincronius (cb) {
  setTimeout(() => {
    try {
      const a = 3
      throw new Error('Error intencional') 
      cb(null, a)
    } catch (error) {
      cb(error)
    }
  }, 1000)
}

asincronius((err, data) => {
  if (err) {
    console.log('Se econtro un error:')
    console.error(err.message)
    
    return
  }
  
  console.log('El dato es: ' + data)
})