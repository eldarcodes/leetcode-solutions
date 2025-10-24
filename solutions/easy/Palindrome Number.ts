/**
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.

  Time complexity = O(n)
  Space complexity = O(n)
*/
export const palindromeNumber = (x: number): boolean => {
  return String(x) === String(x).split("").reverse().join("");
};
