/* eslint-disable prefer-destructuring */

/**
 * 题述： 前五科的均分，具体：https://leetcode-cn.com/problems/high-five/
 * 思路：先对 items 排序 id 权重大于分数并且分数逆序，再遍历一遍同一 id 连续 5 个最高分取一次平均值
 * 时间复杂度：log2n，取决于排序算法时间复杂度，n 为分数的个数
 * 空间复杂度: id 的个数
 * @param {number[][]} items
 * @return {number[][]}
 */
function highFive(items) {
    items.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    const result = [];
    let count = 1;
    let sum = items[0][1];
    for (let i = 1; i < items.length; i++) {
        if (items[i][0] === items[i - 1][0]) {
            count++;
            if (count < 5) {
                sum += items[i][1];
            } else if (count === 5) {
                result.push([items[i][0], ((sum + items[i][1]) / 5) | 0]);
            }
        } else {
            count = 1;
            sum = items[i][1];
        }
    }
    return result;
}
