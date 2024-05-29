/**
  Input: prices = [7,1,5,3,6,4]
  Output: 5

  Time complexity = O(n)
  Space complexity = O(1)
*/
export const maxProfit = (prices: number[]): number => {
  let left = 0; // Buy
  let right = 1; // Sell

  let maxProfit = 0;

  while (right < prices.length) {
    let buy = prices[left];
    let sell = prices[right];

    if (buy < sell) {
      let profit = sell - buy; // our current profit
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }

    right++;
  }
  return maxProfit;
};
