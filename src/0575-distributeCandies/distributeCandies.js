/**
 * 题述：https://leetcode-cn.com/problems/distribute-candies/
 * @param {number[]} candies
 * @return {number}
 */
function distributeCandies(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
}
