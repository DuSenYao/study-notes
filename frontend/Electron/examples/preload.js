const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  // 除函数之外，也可以暴露变量
  electron: process.versions.electron
});

contextBridge.exposeInMainWorld('electron', {
  // 渲染器进程到主进程的通信
  setTitle: (title) => ipcRenderer.send('set-title', title),
  // 双向通信
  writeFile: (content) => ipcRenderer.invoke('write-file', content),
  // 主进程到渲染器进程（单向）
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, counter) => callback(counter))
});
