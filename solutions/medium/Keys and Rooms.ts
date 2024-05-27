/**
  Input: rooms = [[1],[2],[3],[]]
  Output: true

  Time complexity = O(n + m)
  Space complexity = O(n)
*/
export function canVisitAllRooms(rooms: number[][]): boolean {
  const seen = new Array(rooms.length).fill(false);
  seen[0] = true;

  const keys: number[] = [];
  keys.push(0);

  while (keys.length) {
    const currentKey = keys.pop()!;

    for (let newKey of rooms[currentKey]) {
      if (!seen[newKey]) {
        seen[newKey] = true;
        keys.push(newKey);
      }
    }
  }

  return seen.every((value) => !!value);
}
