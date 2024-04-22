/**
  Input: nums = [2,1,5,0,4,6]
  Output: true
  
  Time complexity = O(n)
  Space complexity = O(1)
*/
export function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) {
    return false;
  }

  let firstMin = Infinity;
  let secondMin = Infinity;

  for (const num of nums) {
    if (num <= firstMin) {
      firstMin = num;
    } else if (num <= secondMin) {
      secondMin = num;
    } else {
      return true;
    }
  }

  return false;
}
