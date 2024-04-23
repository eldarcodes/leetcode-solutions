export function compress(chars: string[]): number {
  let write = 0; // Pointer for writing compressed output
  let read = 0; // Pointer for traversing input array

  const n = chars.length;

  while (read < n) {
    const currentChar = chars[read];
    let count = 0;

    while (read < n && chars[read] === currentChar) {
      count++;
      read++;
    }

    chars[write] = currentChar;
    write++;

    if (count > 1) {
      const countStr = count.toString();

      for (let i = 0; i < countStr.length; i++) {
        chars[write] = countStr[i];
        write++;
      }
    }
  }

  return write;
}
