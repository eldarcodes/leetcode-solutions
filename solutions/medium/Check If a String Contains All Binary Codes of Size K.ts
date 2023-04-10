export function hasAllCodes(s: string, k: number): boolean {
  const codes = new Set<string>();

  for (let i = 0; i <= s.length - k; i++) {
    codes.add(s.substring(i, i + k));
  }

  return codes.size === 2 ** k;
}
