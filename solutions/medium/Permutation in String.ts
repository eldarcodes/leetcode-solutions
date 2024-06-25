/**
  Input: s1 = "ab", s2 = "eidbaooo"
  Output: true

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Map = new Map<string, number>();
  const s2Map = new Map<string, number>();

  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
    s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
  }

  function compareMap(
    map1: Map<string, number>,
    map2: Map<string, number>
  ): boolean {
    if (map1.size !== map2.size) {
      return false;
    }

    for (const [key, value] of map1) {
      if (map2.get(key) !== value) {
        return false;
      }
    }

    return true;
  }

  if (compareMap(s1Map, s2Map)) return true;

  let left = s1.length;
  for (let right = left; right < s2.length; right++) {
    const charToAdd = s2[right];
    const charToRemove = s2[right - left];

    s2Map.set(charToAdd, (s2Map.get(charToAdd) || 0) + 1);

    if (s2Map.get(charToRemove) === 1) {
      s2Map.delete(charToRemove);
    } else {
      s2Map.set(charToRemove, (s2Map.get(charToRemove) || 0) - 1);
    }

    if (compareMap(s1Map, s2Map)) return true;
  }

  return false;
}
