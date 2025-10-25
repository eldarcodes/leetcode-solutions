/**
  Input: strs = ["flower","flow","flight"]
  Output: "fl"

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function longestCommonPrefix(strs: string[]): string {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return result;
    }

    result += strs[0][i];
  }

  return result;
}
