/**
  Input
  ["MyQueue", "push", "push", "peek", "pop", "empty"]
  [[], [1], [2], [], [], []]
  Output
  [null, null, null, 1, 1, false]
*/
export class MyQueue {
  private input: number[];
  private output: number[];

  constructor() {
    this.input = [];
    this.output = [];
  }

  push(x: number): void {
    while (this.output.length > 0) {
      this.input.push(this.output.pop()!);
    }

    this.input.push(x);

    while (this.input.length > 0) {
      this.output.push(this.input.pop()!);
    }
  }

  pop(): number {
    return this.output.pop()!;
  }

  peek(): number {
    return this.output[this.output.length - 1];
  }

  empty(): boolean {
    return this.output.length === 0;
  }
}
