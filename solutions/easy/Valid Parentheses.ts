/**
  Input: s = "()[]{}"
  Output: true

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function isValid(s: string): boolean {
  const map: Record<PropertyKey, string> = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (map[current]) {
      const top = stack.pop();

      if (top !== map[current]) {
        return false;
      }
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}
