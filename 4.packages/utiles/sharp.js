const sharp = require('sharp')

sharp('./img/demo.jpg')
  .resize(80)
  .toFile('./img/resize.jpg')
  
sharp('./img/demo.jpg')
  .resize(80)
  .grayscale()
  .toFile('./img/black-and-white.jpg')