import electron from "electron";

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) => {
    electron.ipcRenderer.on("discord-main-message", (_, data) => {
      callback(data);
    });
  },
  getStaticData: () => electron.ipcRenderer.invoke("get-static-data"),
});
