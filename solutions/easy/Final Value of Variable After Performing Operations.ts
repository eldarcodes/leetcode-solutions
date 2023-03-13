export function finalValueAfterOperations(operations: string[]): number {
  let x = 0;

  const INCREMENT_OPERATION = ["X++", "++X"];

  for (const operation of operations) {
    if (INCREMENT_OPERATION.includes(operation)) {
      x++;
    } else {
      x--;
    }
  }

  return x;
}
