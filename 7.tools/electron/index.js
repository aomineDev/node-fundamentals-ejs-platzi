const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', createWindow)

function createWindow () {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  mainWindow.loadFile('./public/index.html')
}