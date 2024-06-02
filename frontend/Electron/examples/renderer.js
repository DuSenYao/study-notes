// @ts-nocheck

const info = document.getElementById('info');
info.innerHTML = `Chrome (v${window.versions.chrome})，Node.js (v${window.versions.node})`;

// 渲染器进程到主进程的通信
const btn = document.getElementById('btn');
const titleInput = document.getElementById('title');
btn.addEventListener('click', () => {
  const title = titleInput.value;
  window.electron.setTitle(title);
});

// 双向通信
const btn2 = document.getElementById('btn2');
const contentInput = document.getElementById('content');
btn2.addEventListener('click', async () => {
  const content = contentInput.value;
  const len = window.electron.writeFile(content);
  info.innerHTML = `文件大小：${len} 字节`;
});

// 主进程到渲染器进程（单向）
const counter = document.getElementById('counter');
window.electron.onUpdateCounter((count) => {
  counter.innerHTML = count;
});
