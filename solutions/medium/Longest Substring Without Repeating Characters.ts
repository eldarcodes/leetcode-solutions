/**
  Input: s = "abcabcbb"
  Output: 3

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let charSet = new Set<string>();

  let result = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    result = Math.max(result, right - left + 1);
  }

  return result;
}
