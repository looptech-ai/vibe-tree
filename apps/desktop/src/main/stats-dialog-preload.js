const { contextBridge, ipcRenderer } = require('electron');

// Expose close function to renderer
contextBridge.exposeInMainWorld('statsDialog', {
  close: () => {
    ipcRenderer.send('stats-dialog:close');
  },
  getStats: () => ipcRenderer.invoke('stats:get-data'),
  onStatsData: (callback) => {
    ipcRenderer.on('stats-data', (event, stats) => callback(stats));
  }
});
