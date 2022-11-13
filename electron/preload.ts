import { contextBridge, ipcRenderer } from "electron";
// const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer,
  recall: (callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
    console.log('recalling recall')
    ipcRenderer.on('recall', callback)
  }
});
