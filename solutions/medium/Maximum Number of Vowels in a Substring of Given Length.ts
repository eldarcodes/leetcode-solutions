/**
  Input: s = "abciiidef", k = 3
  Output: 3

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let currentVowels = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowels++;
    }
  }

  let maxVowels = currentVowels;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      currentVowels--;
    }

    if (vowels.has(s[i])) {
      currentVowels++;
    }

    maxVowels = Math.max(maxVowels, currentVowels);
  }

  return maxVowels;
}
