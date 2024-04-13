const { argv } = process;
import { readFileSync } from 'fs';

// argv[2] 是 vscode 当前文件路径
const fileContent = readFileSync(argv[2], { encoding: 'utf-8' });
const wordCount = fileContent.replace(/\s*/g, '').length;

console.log(`当前文件字数：${wordCount}`);
