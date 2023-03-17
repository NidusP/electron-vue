import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

const createWindow = () => {
    const win = new BrowserWindow({
        titleBarStyle: 'default',
        width: 500,
        height: 500,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    console.log(app.isPackaged, process.env.NODE_ENV, 'app.isPackaged')
    win.webContents.openDevTools()
    if(process.env.NODE_ENV === 'production'){
        console.log('dev')
        const { VITE_DEV_SERVER_URL  } = process.env
        win.loadURL(VITE_DEV_SERVER_URL!)
    } else {
        console.log('production')
        win.loadFile(path.join(__dirname, '../dist-electron/index.html'))
    }
    ipcMain.on('message', (_args, ...data) => {
        console.log('receive', data)
        win.webContents.send('recall', '哈哈哈哈', 'this is recall !')
    })
}

app.whenReady().then(createWindow)