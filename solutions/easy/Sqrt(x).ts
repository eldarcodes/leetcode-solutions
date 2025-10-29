/**
  Input: x = 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

  Time complexity = O(log n)
  Space complexity = O(1)
*/
export function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (Math.pow(mid, 2) > x) {
      right = mid - 1;
    } else if (Math.pow(mid, 2) < x) {
      left = mid + 1;
      result = mid;
    } else {
      return mid;
    }
  }

  return result;
}
