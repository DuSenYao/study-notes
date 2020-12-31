// Worker 内代码只能 require 指定 Worker 路径内的文件，无法引用其它路径
import { number4 } from './utils'

// Worker 内不支持 wx 系列的 API
// 接收主线程数据
worker.onMessage((msg) => {
  console.log(msg)
})

// 向主线程发送数据
worker.postMessage({
  msg: 'worker ' + number4()
})