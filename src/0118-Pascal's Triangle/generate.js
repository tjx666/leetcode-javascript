/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        const arr = [1];
        for (let j = 1; j < i; j++) {
            arr[j] = result[i - 1][j] + result[i - 1][j - 1];
        }
        arr[i] = 1;
        result.push(arr);
    }

    return result;
}

module.exports = generate;
