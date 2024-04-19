export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
}
