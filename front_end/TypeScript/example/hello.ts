function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
  for (const [k, aVal] of Object.entries(a)) {
    if (!(k in b) || aVal !== b[k]) {
      // 对象 “{}” 类型的索引签名隐式地含有 "any" 类型
      return false;
    }
  }
  return Object.keys(a).length === Object.keys(b).length;
}

function cachelast<T extends Function>(fn: T): T {
  let lastArgs: any[] | null = null;
  let lastResult: any;
  return function (...args: any[]) {
    // 不能将类型 “(...args: any[]) => any” 分配给类型 “T”
    if (!lastArgs || !shallowObjectEqual(lastArgs, args)) {
      lastResult = fn(...args);
      lastArgs = args;
    }
    return lastResult;
  } as unknown as T;
}
