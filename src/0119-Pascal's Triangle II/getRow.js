/**
 * 题述：杨辉三角 II，获取第 K 行元素，k 从 0 开始
 * 思路：迭代每一行的时候从右边往左
 * 时间复杂度：k²
 * 空间复杂度：k
 * @param {number} k
 * @return {number[]}
 */
function getRow(k) {
    // 第 k 行有 k + 1 个元素
    const len = k + 1;
    const array = new Array(len);
    for (let i = 0; i < len; i++) {
        array[i] = 1;
        for (let j = i - 1; j >= 1; j--) {
            array[j] += array[j - 1];
        }
    }
    return array;
}

module.exports = getRow;
