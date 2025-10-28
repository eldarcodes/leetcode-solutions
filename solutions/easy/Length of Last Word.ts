/**
  Input: s = "   fly me   to   the moon  "
  Output: 4

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function lengthOfLastWord(s: string): number {
  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i -= 1;
  }

  while (i >= 0 && s[i] !== " ") {
    length += 1;
    i -= 1;
  }

  return length;
}
