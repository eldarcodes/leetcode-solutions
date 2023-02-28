export function singleNumber(nums: number[]): number {
  let result = 0;

  for (let num of nums) {
    result = num ^ result;
  }

  return result;
}
