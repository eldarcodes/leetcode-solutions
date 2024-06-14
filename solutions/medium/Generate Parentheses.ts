/**
  Input: n = 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]


  Time complexity = O()
  Space complexity = O()
*/
export function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const result: string[] = [];

  const backtrack = (openedCount: number, closedCount: number) => {
    console.log(stack);
    if (openedCount === n && closedCount === n) {
      result.push(stack.join(""));
      return;
    }

    if (openedCount < n) {
      stack.push("(");
      backtrack(openedCount + 1, closedCount);
      stack.pop();
    }

    if (closedCount < openedCount) {
      stack.push(")");
      backtrack(openedCount, closedCount + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);

  return result;
}
