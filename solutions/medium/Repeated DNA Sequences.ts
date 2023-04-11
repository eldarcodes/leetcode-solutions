export function findRepeatedDnaSequences(s: string): string[] {
  const seen = new Map<string, number>();
  const repeated = new Set<string>();

  for (let i = 0; i < s.length - 9; i++) {
    const current = s.substring(i, i + 10);

    if (seen.has(current)) {
      repeated.add(current);
    } else {
      seen.set(current, 1);
    }
  }

  return [...repeated];
}
