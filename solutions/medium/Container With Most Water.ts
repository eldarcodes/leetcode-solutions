/**
  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);

    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
