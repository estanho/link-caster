import { BrowserWindow } from "electron";

export function discordMain(mainWindow: BrowserWindow) {
  setInterval(() => {
    mainWindow.webContents.send("discord-main-message", "Hello from electron");
  }, 2000);
}
