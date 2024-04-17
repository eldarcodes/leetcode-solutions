/**
  Input: word1 = "abc", word2 = "pqr"
  Output: "apbqcr"

  Time complexity = O(n)
  Space complexity = O(n)
*/
function mergeAlternately(word1: string, word2: string): string {
  let result = "";

  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) {
      result += word1[i];
    }

    if (word2[i]) {
      result += word2[i];
    }
  }

  return result;
}
