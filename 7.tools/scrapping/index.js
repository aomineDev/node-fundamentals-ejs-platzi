const puppeteer = require('puppeteer');

(async () => {
  // Nuestro código
  console.log('Lanzamos navegador!')
  // const browser = await puppeteer.launch()
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()

  await page.goto('https://aomine.teampixeland.com')

  const titleOne = await page.evaluate(() => {
    const h1 = document.querySelector('h1')
    return h1.innerHTML
  })

  console.log('Titulo de la pagina: ' + titleOne)

  console.log('Cerramos navegador...')
  browser.close()
  console.log('Navegador cerrado')
})()
