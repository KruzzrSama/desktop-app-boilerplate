import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import url from "url";
export default class Main {

    private window: BrowserWindow | null;
    constructor() {
        app.on("ready", this.createWindow);
        app.on("window-all-closed", this.windowAllClosed);
        app.on("activate", this.activate);
        this.ipc();
    }

    private ipc() {
        ipcMain.on("test", async (event, data) => {
            event.reply("res.test", data);
        });
    }

    private async windowAllClosed() {
        if (process.platform !== "darwin") app.quit();
    }
    private activate() {
        if (this.window === null) {
            this.createWindow();
        }
    }
    private createWindow() {
        this.window = new BrowserWindow({
            width: 1280,
            minWidth: 1280,
            height: 768,
            minHeight: 768,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                webSecurity: false
            },
        });

        this.window.loadURL(url.format({
            pathname: path.join(__dirname, "assets", "index.html"),
            protocol: "file:",
            slashes: true
        }));
        this.window.on("close", async () => {
            await new Promise(r => setTimeout(r, 5000));
        });
        this.window.on("closed", async () => {
            this.window = null;
        });
    }
} new Main;