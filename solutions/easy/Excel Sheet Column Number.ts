export function titleToNumber(columnTitle: string): number {
  let multiplier = 1;
  let result = 0;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    result += (columnTitle.charCodeAt(i) - 64) * multiplier;
    multiplier *= 26;
  }

  return result;
}
