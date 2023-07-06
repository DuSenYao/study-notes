import { readdirSync, readFileSync, createWriteStream, createReadStream } from 'fs';
import { createInterface } from 'readline';

/**
 * @param {import("fs").PathLike} path
 */
function getFiles(path) {
  return readdirSync(path, { encoding: 'utf-8', withFileTypes: true });
}

let oldMarkdownCount = 3149355;
let markdownCount = 0;
/**
 * @param {import("fs").PathLike} [path] 文件路径
 */
function getAllFiles(path = process.cwd()) {
  getFiles(path).forEach((item) => {
    const name = item.name;
    if (['.git', 'node_modules', '.vscode'].includes(name)) return; // 过滤掉不需要的文件夹

    // 如果是目录，递归获取文件
    if (item.isDirectory()) {
      return getAllFiles(`${path}/${name}`);
    }

    // 如果是文件，判断是否是 markdown 文件
    if (name.endsWith('.md')) {
      markdownCount += readFileSync(`${path}/${name}`, { encoding: 'utf-8' }).replace(/\s*/g, '').length; // 读取文件内容并统计字数
    }
  });
}

getAllFiles();

// 打印旧字数、新字数、增加字数
console.table({ old: oldMarkdownCount, new: markdownCount, increase: markdownCount - oldMarkdownCount });

const fileURL = 'D:/GitHub/study-notes/frontend/node.js/examples/markdownCount.mjs';
// 更新 markdownCount.mjs 文件
const rl = createInterface({
  input: createReadStream(fileURL)
});

let content = '';
rl.on('line', (line) => {
  content += line.startsWith('let oldMarkdownCount =') ? `let oldMarkdownCount = ${markdownCount};\r\n` : `${line}\r\n`;
});

rl.on('close', () => {
  createWriteStream(fileURL).write(content);
});
