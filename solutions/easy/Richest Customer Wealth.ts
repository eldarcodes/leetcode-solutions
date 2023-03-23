export function maximumWealth(accounts: number[][]): number {
  return accounts.reduce((max, account) => {
    const sum = account.reduce((sum, val) => sum + val);
    return sum > max ? sum : max;
  }, 0);
}
