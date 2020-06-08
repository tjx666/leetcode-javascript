/**
 * 题述：盛水的容器，https://leetcode-cn.com/problems/container-with-most-water/
 * 思路：暴力法
 * 时间复杂度： n²
 * 空间复杂度： 1
 * @param {number[]} heightArray 高度数组
 * @returns {number}
 * @example
 *
 * heightArray: [1,8,6,2,5,4,8,3,7]
 * return: 49
 *
 */
function maxArea(heightArray) {
    const { length } = heightArray;
    let max = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            const area = (j - i) * Math.min(heightArray[i], heightArray[j]);
            max = Math.max(max, area);
        }
    }
    return max;
}

module.exports = maxArea;
