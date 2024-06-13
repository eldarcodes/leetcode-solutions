/**
  Input: tokens = ["2","1","+","3","*"]
  Output: 9

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  const operators = ["+", "-", "*", "/"];

  for (const token of tokens) {
    console.log(stack);
    if (operators.includes(token)) {
      const a = stack.pop()!;
      const b = stack.pop()!;

      if (token === "+") stack.push(b + a);
      else if (token === "-") stack.push(b - a);
      else if (token === "/") stack.push(Math.trunc(b / a));
      else if (token === "*") stack.push(b * a);
    } else {
      stack.push(+token);
    }
  }

  return stack[0];
}
