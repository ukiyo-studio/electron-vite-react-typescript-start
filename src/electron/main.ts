import { app, BrowserWindow } from 'electron';
import { getPreloadPath, getUIPath } from "./pathResolver.js";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            // for security reasons, it's recommended to disable nodeIntegration
            nodeIntegration: true,
            contextIsolation: false,
            // the path to the preload script
            preload: getPreloadPath(),
        }
    });

    const isDev = process.env.NODE_ENV === 'development';

    if (isDev) {
        mainWindow.loadURL('http://localhost:3000');
    } else {
        mainWindow.loadFile(getUIPath());
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
