export function leftRightDifference(nums: number[]): number[] {
  let result = [];
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    result.push(Math.abs(leftSum - rightSum));
    leftSum += nums[i];
  }

  return result;
}
