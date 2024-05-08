/**
  Input: s = "3[a2[c]]"
  Output: "accaccacc"

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function decodeString(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let substring = "";

      while (stack[stack.length - 1] !== "[") {
        substring = stack.pop() + substring;
      }

      stack.pop();

      let k = "";
      while (stack && Number.isInteger(+stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      substring = substring.repeat(+k);

      stack.push(substring);
    }
  }

  return stack.join("");
}
