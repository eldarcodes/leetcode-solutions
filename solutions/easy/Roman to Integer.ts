/**
  Input: s = "LVIII"
  Output: 58
  Explanation: L = 50, V= 5, III = 3.

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function romanToInt(s: string): number {
  const map: Record<PropertyKey, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    const currentValue = map[s[i]];
    const nextValue = map[s[i + 1]];

    if (currentValue >= nextValue || !nextValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }
  }

  return result;
}
