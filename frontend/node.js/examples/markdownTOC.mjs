import fs from 'fs';
import os from 'os';

let argv = process.argv;
const files = fs.readFileSync(argv[2]).toString().split(/\r?\n/);

/**
 * 将更改后的 markdown 目录写入文件
 * @param {Number} startLine
 * @param {Number} endLine
 * @param {String} filePath
 */
function writeFile(startLine, endLine, filePath) {
  for (let i = startLine - 1; i < endLine; i++) {
    files[i] = files[i].replace('(#', `(./chapters/${filePath}#`);
  }
  let text = '';
  files.forEach((file, i) => {
    text += i === files.length - 1 ? file : file + os.EOL;
  });
  fs.writeFileSync(argv[2], text);
}

/**
 * 提示用户输入信息并读取返回
 * @param {String} tip 提示信息
 * @returns {String}
 */
function getArgv(tip) {
  process.stdout.write(tip || '> ');
  process.stdin.pause();
  const buf = Buffer.allocUnsafe(10000);
  let response = fs.readSync(process.stdin.fd, buf, 0, 10000, 0);

  return buf.toString('utf8', 0, response).trim();
}

function open() {
  if (!argv[2].endsWith('.md')) {
    console.error('文件格式错误');
    process.exit();
  }

  let startLine = Number(getArgv('输入开始行号：'));
  let endLine = Number(getArgv('输入结束行号：'));
  let filePath = getArgv('输入文件路径：');

  process.stdin.end();

  writeFile(startLine, endLine, filePath);
}
open();
