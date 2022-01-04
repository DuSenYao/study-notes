function query(...args: [string, number, boolean]) {
  const d: string = args[0];
  const n: number = args[1];
  const b: boolean = args[2];
  console.log(d, n, b);
}

query('1', 2, false);
