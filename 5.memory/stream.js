const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''

const readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('utf8')

readableStream.on('data', chunk => {
  data += chunk
})

readableStream.on('end', () => {
  // console.log(data)
})

// ------------------------------------------------------

// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const Transform = stream.Transform

function UpperCase () {
  Transform.call(this)
}

util.inherits(UpperCase, Transform)

UpperCase.prototype._transform = function (chunk, encode, cb) {
  const chunkUpperCase = chunk.toString().toUpperCase()
  this.push(chunkUpperCase)
  cb()
}

const upperCase = new UpperCase()

readableStream
  .pipe(upperCase)
  .pipe(process.stdout)