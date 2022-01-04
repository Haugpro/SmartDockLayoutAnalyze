import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

const {ipcMain, dialog} = require('electron')

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    //width: 800,
    //height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  //mainWindow.setMenuBarVisibility(false);

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`http://localhost:4000`);
  } else {
    mainWindow.loadURL(
      url.format({
          pathname: path.join(__dirname, '../index.html'),
          protocol: 'file:',
          slashes: true
      })
    );


  }
  console.log( 'Hello to <DltBeast_htmlElements> from main.ts');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong');
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong';
})

// show file-open dialog synchronously
// arg: object with various props like
// { title: 'DLT file wählen', defaultPath: 'C:\\ca\\Projects\\DLTTestData', properties: ['openFile', 'multiSelections'],..}
ipcMain.on('msgOpenFileDialog', (event, arg) => {
  // console.log(arg);
  const dlgResult = dialog.showOpenDialogSync( arg);
  // console.log( dlgResult);
  event.returnValue = dlgResult;
})

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;
