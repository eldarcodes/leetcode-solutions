/**
  Input: s = "the sky is blue"
  Output: "blue is sky the"

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function reverseWords(s: string): string {
  return s.split(" ").filter(Boolean).reverse().join(" ");
}
