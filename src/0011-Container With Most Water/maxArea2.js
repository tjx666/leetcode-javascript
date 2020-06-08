/**
 * 题述：盛水的容器，https://leetcode-cn.com/problems/container-with-most-water/
 * 思路：
 * 首尾双指针，利用到贪心思想：想要获取更大的容器体积，每次应该将纵坐标值小的指针往中间靠
 * 值大的往中间靠是没有用的，因为短板效应，只有可能小于等于当前体积
 * 时间复杂度： n
 * 空间复杂度：1
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
    let i = 0;
    let j = length - 1;
    let max = 0;

    while (i !== j) {
        if (heightArray[i] < heightArray[j]) {
            max = Math.max(max, heightArray[i] * (j - i));
            i++;
        } else {
            max = Math.max(max, heightArray[j] * (j - i));
            j--;
        }
    }

    return max;
}

module.exports = maxArea;
