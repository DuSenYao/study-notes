import { readdirSync, readFileSync, createWriteStream } from 'fs';
import { oldMarkdownCount } from './config.mjs';

/**
 * @param {import("fs").PathLike} path
 */
function getFiles(path) {
  return readdirSync(path, { encoding: 'utf-8', withFileTypes: true });
}

let markdownCount = 0; // markdown 文件字数
function getAllFiles(path = process.cwd()) {
  let filesArr = getFiles(path); // 获取目录下的所有文件
  filesArr.forEach(item => {
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
console.table({ old: oldMarkdownCount, new: markdownCount, increase: markdownCount - oldMarkdownCount });
// 这里的路径是相对于 node.js 执行的路径，而不是当前文件的路径
createWriteStream('frontend/node.js/examples/config.mjs').write(`export let oldMarkdownCount = ${markdownCount};`); // 更新 config.mjs 文件中的旧 markdown 文件字数
