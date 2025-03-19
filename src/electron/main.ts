import { app, BrowserWindow, ipcMain } from "electron";
import { isDev } from "./utils.js";
import path from "path";
import { discordMain } from "./discordManager.js";
import { getPreloadPath } from "./pathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(
      path.join(app.getAppPath(), "dist-react", "index.html"),
    );
  }

  discordMain(mainWindow);
  ipcMain.handle("get-static-data", () => {
    return "Hello from handle";
  });
});
