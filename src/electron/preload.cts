import electron from "electron";

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => {
    electron.ipcRenderer.on("main-message", (_, data) => {
      callback(data);
    });
  },
  getStaticData: () => electron.ipcRenderer.invoke("get-static-data"),
} satisfies Window["electron"]);
