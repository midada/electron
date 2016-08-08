
'use strict'

const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 809,
    height: 500
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
