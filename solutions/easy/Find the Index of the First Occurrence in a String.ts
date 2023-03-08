export function strStr(haystack: string, needle: string): number {
  let result = "";

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      result = haystack.slice(i, i + needle.length);
      if (result === needle) return i;
    }
  }

  return -1;
}
