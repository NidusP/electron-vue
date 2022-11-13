export interface electron {
  recall: (args: any) => Promise<void>;
  ipcRenderer: {
    send: (key:string, ...args: any[]) => void
  }
}

declare global {
  interface Window {
    electron: electron;
  }
}



declare const windos: Window & typeof globalThis