export function isHappy(n: number): boolean {
  let sum = 0;
  let set = new Set();

  while (sum != 1) {
    sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    if (set.has(sum)) {
      return false;
    }
    set.add(sum);
    n = sum;
  }

  return true;
}
