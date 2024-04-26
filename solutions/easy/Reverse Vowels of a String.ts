/**
  Input: s = "hello"
  Output: "holle"

  Time complexity = O(n)
  Space complexity = O(n)
*/

function isVowel(c: string): boolean {
  return ["a", "e", "i", "o", "u"].includes(c.toLowerCase());
}

export function reverseVowels(s: string): string {
  const vowels = s.split("").filter(isVowel);

  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      result += vowels.pop();
    } else {
      result += s[i];
    }
  }

  return result;
}
