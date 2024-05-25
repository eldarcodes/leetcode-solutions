/**
  Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
  Output: [4,0,3]

  Time complexity = O(nlogm + mlogm)
  Space complexity = O(n + M)
*/
export function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const result: number[] = [];

  potions = potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let leftIndex = 0;
    let rightIndex = potions.length - 1;

    let minIndex = potions.length;

    while (leftIndex <= rightIndex) {
      let midIndex = Math.floor((leftIndex + rightIndex) / 2);

      if (spells[i] * potions[midIndex] >= success) {
        rightIndex = midIndex - 1;
        minIndex = midIndex;
      } else {
        leftIndex = midIndex + 1;
      }
    }

    result.push(potions.length - minIndex);
  }

  return result;
}
