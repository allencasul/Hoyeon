// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

// Create the browser window.
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    autoHideMenuBar: false,
    nodeIntegration: true,
    devTools: true,
    icon: '../public/electron.ico'
  })
  // Loading the index.html of the app.
  win.loadFile('./app/index.html');
}

// Initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow();
})

// Quit when all windows are closed,
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})