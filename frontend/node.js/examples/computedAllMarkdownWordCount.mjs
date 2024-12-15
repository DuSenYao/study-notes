import { readdirSync, readFileSync, createWriteStream, createReadStream } from 'fs';
import { createInterface } from 'readline';

/**
 * @description 获取指定路径下的所有文件
 * @param {import("fs").PathLike} path
 */
function getFiles(path) {
  return readdirSync(path, { encoding: 'utf-8', withFileTypes: true });
}

let oldMarkdownWordCount = 3282548;
let markdownWordCount = 0; // 最新的 markdown 文件字数
let lastRunTime = '2024/6/17 04:45:56';

/**
 * @param {import("fs").PathLike} [path] 文件路径
 */
async function getAllFiles(path = process.cwd()) {
  const files = getFiles(path);
  for (const item of files) {
    const name = item.name;
    if (['.git', 'node_modules', '.vscode'].includes(name)) continue; // 过滤掉不需要的文件夹

    // 如果是目录，递归获取文件
    if (item.isDirectory()) {
      await getAllFiles(`${path}/${name}`);
    }

    // 如果是文件，判断是否是 markdown 文件
    if (name.endsWith('.md')) {
      const fileContent = readFileSync(`${path}/${name}`, { encoding: 'utf-8' });
      markdownWordCount += fileContent.replace(/\s*/g, '').length; // 读取文件内容并统计字数
    }
  }
}

// 更新 computedAllMarkdownWordCount.mjs 文件
function updateFileContent() {
  const fileURL = 'D:/GitHub/study-notes/frontend/node.js/examples/computedAllMarkdownWordCount.mjs';

  // 使用 readline 逐行读取文件内容
  const rl = createInterface({
    input: createReadStream(fileURL)
  });

  let content = '';
  rl.on('line', (line) => {
    if (line.startsWith('let oldMarkdownWordCount =')) {
      content += `let oldMarkdownWordCount = ${markdownWordCount};\r\n`;
    } else if (line.startsWith('let lastRunTime =')) {
      content += `let lastRunTime = '${lastRunTime}';\r\n`;
    } else {
      content += `${line}\r\n`;
    }
  });

  rl.on('close', () => {
    createWriteStream(fileURL).write(content);
  });
}

getAllFiles().then(() => {
  // 打印旧字数、新字数、增加字数、上次运行时间
  console.table({
    old: oldMarkdownWordCount,
    new: markdownWordCount,
    increase: markdownWordCount - oldMarkdownWordCount,
    lastRunTime
  });
  lastRunTime = new Date().toLocaleString();
  updateFileContent();
});
