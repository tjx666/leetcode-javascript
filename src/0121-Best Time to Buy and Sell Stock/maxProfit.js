/**
 * 贪心，当前最优
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    if (prices <= 1) return 0;

    let max = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0, len = prices.length; i < len; i++) {
        if (prices[i] <= minPrice) {
            minPrice = prices[i];
        } else {
            max = Math.max(max, prices[i] - minPrice);
        }
    }

    return max;
}
