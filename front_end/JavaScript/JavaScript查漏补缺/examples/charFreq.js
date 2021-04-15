/**
 * 这个 Node 程序从标准输入读取文本，计算文本中每个字符出现的频率，然后按使用频率降序显示一个柱形图
 * 运行这个程序需要 Node 12 及以上
 *
 * node charFreq.js < ../JavaScript查漏补缺.md
 */

// 这个类扩展了 Map，以便 get() 方法在 key 不在映射中时，返回指定的值，而不是 null
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // 调用超类构造器
    this.defaultValue = defaultValue; // 记住默认值
  }

  get(key) {
    if (this.has(key)) {
      // 如果映射中有 key 从超类返回它的值
      return super.get(key);
    }
    return this.defaultValue; // 否则，返回默认值
  }
}

class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0); // 字母到数字的映射
    this.totalLetters = 0; // 字符总数
  }

  // 这个函数用文本中的字符更新柱形图
  add(text) {
    // 移除文本中的空白，然后将字母转换为大写
    text = text.replace(/\s/g, '').toUpperCase();
    // 接着循环文本中的字符
    for (let character of text) {
      let count = this.letterCounts.get(character); //取得这个字符之前的数量
      this.letterCounts.set(character, count + 1); // 然后在数量上加1
      this.totalLetters++;
    }
  }

  // 将柱形图转换为字符串并显示 ASCII 图形
  toString() {
    // 把映射转换为一个 [key, value] 数组的数组
    let entries = [...this.letterCounts];

    // 按数量和字母表对数组排序，定义排序的方式
    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        // 如果数量相同，按字母表排序
        return a[0] < b[0] ? -1 : 1;
      }
      return b[1] - a[1]; // 如果数量不同，数量大的排前面
    });

    // 把数量转换为百分比
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }

    // 删除小于 1% 的条目
    entries = entries.filter(entry => entry[1] >= 1);

    // 接着把每个条目转换为一行文本
    let lines = entries.map(([l, n]) => `${l}: ${'#'.repeat(Math.round(n))} ${n.toFixed(2)}%`);

    // 返回所有行拼接起来的结构，以换行符分隔
    return lines.join('\n');
  }

  getTotalLetters() {
    return `文件总字符数：${this.totalLetters}`;
  }
}

// 这个 async 函数创建一个 Histogram 对象
// 从标准输入异步读取文本块，然后把这些块添加到柱形图
async function histogramFromStdin() {
  process.stdin.setEncoding('utf-8'); // 读取 Unicode 字符串，而非字节
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// 最后这行代码是这个程序的主体
// 它基于标准输入创建一个 Histogram 对象，然后打印柱形图
histogramFromStdin().then(histogram => {
  console.log(histogram.toString());
  console.log(histogram.getTotalLetters());
});
