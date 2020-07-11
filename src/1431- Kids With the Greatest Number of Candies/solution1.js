/**
 * 题述：
 * 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
 * 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有最多的糖果。
 * 注意，允许有多个孩子同时拥有最多的糖果数目。
 * 思路：一个孩子分配额外的糖果数后是不是最大拥有者只和额外糖果数以及未分配额外糖果时最大拥有者有关，可以先计算出未分配额外糖果时最大拥有者
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies);
    for (let i = 0, len = candies.length; i < len; i++) {
        candies[i] = candies[i] + extraCandies >= max;
    }
    return candies;
}
