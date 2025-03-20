import { BrowserWindow } from "electron";

export function baseMain(mainWindow: BrowserWindow) {
  setInterval(() => {
    mainWindow.webContents.send("main-message", "Hello from electron");
  }, 2000);
}
