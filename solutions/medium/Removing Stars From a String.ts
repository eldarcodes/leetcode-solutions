/**
  Input: s = "leet**cod*e"
  Output: "lecoe"

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function removeStars(s: string): string {
  let result: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join("");
}
