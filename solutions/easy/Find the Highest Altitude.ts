/**
  Input: gain = [-5,1,5,0,-7]
  Output: 1

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function largestAltitude(gain: number[]): number {
  let maxHeight = 0;
  let currentHeight = 0;

  for (let i = 0; i < gain.length; i++) {
    currentHeight += gain[i];

    if (currentHeight > maxHeight) {
      maxHeight = currentHeight;
    }
  }

  return maxHeight;
}
