interface A {
  [prop: string]: 0 | 1;
  [prop: number]: number; // 编译错误
}
