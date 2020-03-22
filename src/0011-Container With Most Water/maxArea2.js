/**
 * 盛水的容器问题
 *
 * 双指针
 *
 * @param {number[]} heightArray 高度数组
 * @returns {number}
 *
 * @example
 * heightArray: [1,8,6,2,5,4,8,3,7]
 * return: 49
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
