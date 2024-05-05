/**
  Input
  ["RecentCounter", "ping", "ping", "ping", "ping"]
  [[], [1], [100], [3001], [3002]]
  Output
  [null, 1, 2, 3, 3]


  Time complexity = O(n)
  Space complexity = O(1)
*/
export class RecentCounter {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    this.queue.push(t);

    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}
