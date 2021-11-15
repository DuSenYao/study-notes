declare const F: {
  new (x: number): number; // 构造签名
  (x: number): number; // 调用签名
};

// 作为普通函数调用
const a: number = F(1);
// 作为构造函数调用
const b: number = new F(1);
