/**
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
    const result = [];

    for (let i = 0; i <= rowIndex; i++) {
        const arr = [1];
        for (let j = 1; j < i; j++) {
            arr[j] = result[i - 1][j] + result[i - 1][j - 1];
        }
        arr[i] = 1;
        result.push(arr);
    }

    return result[rowIndex];
}

module.exports = getRow;
