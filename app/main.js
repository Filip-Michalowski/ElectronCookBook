/*
Uncaught Exception:
ReferenceError: _dirname is not defined
  at App.createWindow (G:\Projekty duże i małe\Kucharzenie\ElectronCookBook\app\main:js:14:25)
  at emitTwo (even.js:111:20)
  at App.emit (event.js:191.7)
(It should be __dirname, with two '_'.)
*/

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//Declaration here prevents the main window from being garbage collected. Huh.
let win;

function createWindow() {
  //Create the browser window...
  win = new BrowserWindow({ width: 800, heigh: 600 });//TODO check how to make a maximised one
  
  //...and load index.html
  win.loadURL(url.format({
    pathname: path.join(_dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  
  //DevTools. Hmm.
  win.webContents.openDevTools();
  
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

//You can either put all the code in here, or put them in seperate files
//and use require
