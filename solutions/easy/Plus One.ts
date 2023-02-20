export function plusOne(digits: number[]): number[] {
  let curry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += 1;

    if (digits[i] === 10) {
      digits[i] = 0;
      curry = 1;
    } else {
      curry = 0;
      break;
    }
  }

  if (curry) {
    digits = [1, ...digits];
  }

  return digits;
}
