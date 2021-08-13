export default function maxProfit(prices: number[]): number {
  let biggestProfit = 0;
  let currentMin = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - currentMin > biggestProfit) {
      biggestProfit = prices[i] - currentMin;
    }

    if (prices[i] < currentMin) {
      currentMin = prices[i];
    }
  }

  return biggestProfit;
}
