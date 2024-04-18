/**
  Input: str1 = "ABABAB", str2 = "ABAB"
  Output: "AB"

  Time complexity = O(n)
  Space complexity = O(n)
*/

const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  return str1.substring(0, gcd(str1.length, str2.length));
}
