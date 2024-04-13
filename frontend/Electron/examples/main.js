const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

// 创建窗口
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true, // 隐藏菜单栏
    webPreferences: {
      nodeIntegration: true, // 是否集成 Node.js
      enableRemoteModule: true, // 是否启用 remote 模块
      webSecurity: false, // 是否禁用同源策略
      preload: path.join(__dirname, 'preload.js') // 预加载脚本
    }
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, './dist', 'index.html'),
      protocol: 'file:',
      slashes: true, // true: file://, false: file:
      hash: '/login'
    })
  );
};

function handleSetTitle(event, title) {
  const webContents = event.sender; // 获取发送事件的 webContents
  const win = BrowserWindow.fromWebContents(webContents); // 通过 webContents 获取窗口
  win.setTitle(title); // 设置窗口标题
}

async function handleWriteFile(content) {
  console.log(content, 'content');
  await fs.promises.writeFile('test.txt', content); // 写入文件
  const stats = await fs.promises.stat('test.txt'); // 获取文件属性
  return stats.size; // 返回文件大小
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.whenReady().then(() => {
  // 渲染器进程到主进程的通信
  ipcMain.on('set-title', handleSetTitle);

  // 双向通信
  ipcMain.handle('write-file', handleWriteFile);

  const win = createWindow();

  // 主进程到渲染器进程（单向）
  let counter = 1;
  win.webContents.send('update-counter', counter);
  setInterval(() => {
    counter += 3;
    win.webContents.send('update-counter', counter);
  }, 3000);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 当所有窗口都已关闭时退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
