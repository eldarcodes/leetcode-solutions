export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let sMap = {} as Record<string, number>;
  let tMap = {} as Record<string, number>;

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  for (let sKey of Object.keys(sMap)) {
    if (sMap[sKey] !== tMap[sKey]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "raagnrm"));
