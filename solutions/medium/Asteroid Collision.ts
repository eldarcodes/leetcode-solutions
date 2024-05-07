/**
  Input: asteroids = [5,10,-5]
  Output: [5,10]

  Time complexity = O()
  Space complexity = O()
*/
export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let asteroid of asteroids) {
    while (stack.length && stack[stack.length - 1] > 0 && asteroid < 0) {
      const diff = asteroid + stack[stack.length - 1];

      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        asteroid = 0;
      } else {
        asteroid = 0;
        stack.pop();
      }
    }

    if (asteroid) {
      stack.push(asteroid);
    }
  }

  return stack;
}
