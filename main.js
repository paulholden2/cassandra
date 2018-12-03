const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720
  });

  windowUrl = url.format({
    pathname: path.join(__dirname, '/dist/index.html'),
    protocol: 'file:',
    slashes: true
  });

  // Use electron . --serve for hot loading from source
  if (process.argv.some(arg => arg === '--serve')) {
    win.loadURL('http://localhost:4200')
  } else {
    win.loadURL(windowUrl);
  }

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
