import Electron from "electron";
declare global {
    module Express {
        interface Request {
            tckn: string | null;
            password: string | null;
        }
    }
    interface Window {
        ipcRenderer: Electron.IpcRenderer;
    }
}

export { }