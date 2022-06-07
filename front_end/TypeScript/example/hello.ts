function extent(nums: number[]) {
  let result: [number, number] | null = null;
  for (const num of nums) {
    if (result) {
      result = [Math.min(num, result[0]), Math.max(num, result[1])];
    } else {
      result = [num, num];
    }
  }
  return result;
}
const [min, max] = extent([0, 1, 2])!;
console.log(max - min);
