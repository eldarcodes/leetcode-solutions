export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    const anagrams = map.get(sortedStr) || [];
    anagrams.push(str);
    map.set(sortedStr, anagrams);
  }

  return Array.from(map.values());
}
