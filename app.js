const { BrowserWindow, app } = require('electron');
const windowWidth = 300;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    hasShadow: true,
    frame: false,
    width: windowWidth,
    height: 400,
    maxWidth: windowWidth,
    minWidth: windowWidth,
  });

  mainWindow.loadURL('file:///./index.html');
});
