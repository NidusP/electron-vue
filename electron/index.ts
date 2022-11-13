import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            // 
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    console.log(app.isPackaged, process.env.NODE_ENV, 'app.isPackaged')
    if(process.env.NODE_ENV === 'production'){
        console.log('dev')
        const { VITE_DEV_SERVER_URL  } = process.env
        win.webContents.openDevTools()
        win.loadURL(VITE_DEV_SERVER_URL!)
    } else {
        console.log('production')
        win.loadFile(path.join(__dirname, '../index.html'))
    }
    ipcMain.on('message', (_args, ...data) => {
        console.log('receive', data)

        win.webContents.send('recall', '哈哈哈哈', 'this is recall !')
    })
}

app.whenReady().then(createWindow)