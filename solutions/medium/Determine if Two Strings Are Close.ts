/**
  Input: word1 = "abc", word2 = "bca"
  Output: true

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];

    const value1 = map1.get(char1) || 0;
    const value2 = map2.get(char2) || 0;

    map1.set(char1, value1 + 1);
    map2.set(char2, value2 + 1);
  }

  const keys1 = Array.from(map1.keys()).sort().join("");
  const keys2 = Array.from(map2.keys()).sort().join("");

  const values1 = Array.from(map1.values()).sort().join("");
  const values2 = Array.from(map2.values()).sort().join("");

  return keys1 === keys2 && values1 === values2;
}
