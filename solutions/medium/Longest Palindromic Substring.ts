export function longestPalindrome(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    // odd length
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > result.length) {
        result = s.substring(left, right + 1);
      }

      left--;
      right++;
    }

    // even length
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > result.length) {
        result = s.substring(left, right + 1);
      }

      left--;
      right++;
    }
  }

  return result;
}
