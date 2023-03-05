export function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    count += n % 2;

    n = Math.floor(n / 2);
  }

  return count;
}
