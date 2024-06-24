/**
  Input: s = "ABAB", k = 2
  Output: 4

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function characterReplacement(s: string, k: number): number {
  let maxCount = 0;
  let maxLength = 0;

  let hash: Record<string, number> = {};

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    hash[s[right]] = (hash[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, hash[s[right]]);

    while (right - left + 1 - maxCount > k) {
      hash[s[left]] -= 1;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
