/**
  Input: temperatures = [73,74,75,71,69,72,76,73]
  Output: [1,1,4,2,1,1,0,0]

  Time complexity = O(n)
  Space complexity = O(n)
*/

export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: [number, number][] = [];
  const result: number[] = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
      const [, stackIndex] = stack.pop()!;

      result[stackIndex] = i - stackIndex;
    }

    stack.push([temperatures[i], i]);
  }

  return result;
}
