/**
  Input: piles = [3,6,7,11], h = 8
  Output: 4

  Time complexity = O(n log m)
  Space complexity = O(1)
*/
export function minEatingSpeed(piles: number[], h: number): number {
  const max = Math.max(...piles);

  let left = 1;
  let right = max;

  let result = right;

  while (left <= right) {
    let max = 0;
    let mid = Math.floor((left + right) / 2);

    for (let pile of piles) {
      max += Math.ceil(pile / mid);
    }

    if (max <= h) {
      result = Math.min(result, mid);

      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}
