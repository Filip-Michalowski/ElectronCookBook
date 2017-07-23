const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//Declaration here prevents the main window from being garbage collected. Huh.
let win;

//TODO Finish transcribing the tutorial.
