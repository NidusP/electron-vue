import { app, BrowserWindow } from 'electron'
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
        win.loadURL(VITE_DEV_SERVER_URL!)
    } else {
        console.log('production')
        win.loadFile(path.join(__dirname, '../index.html'))
    }
   
}

app.whenReady().then(createWindow)