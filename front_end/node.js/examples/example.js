// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
let exec = require('child_process').exec;

fs.readFile('C:/Users/dsy/Documents/gogs/customer_service/src/views/main/chat/data.js', 'utf8', (err, text) => {
  // 读取文件时出错了
  if (err) {
    console.error(err);
    return;
  }
  try {
    let data = JSON.stringify(text);
    // 复制文件到接切板
    exec(`echo ${data} | clip`);
  } catch (e) {
    // 解析文件内容时出错了
    console.error(e);
  }
});
