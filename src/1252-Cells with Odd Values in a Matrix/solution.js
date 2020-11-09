/**
 * 题述：奇数值单元格的数目
 * 思路：https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/solution/ti-jie-1252-qi-shu-zhi-dan-yuan-ge-de-shu-mu-by-ze/
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(n, m, indices) {
    const rows = new Array(n);
    const columns = new Array(m);

    for (const [row, column] of indices) {
        rows[row] = ~~rows[row] + 1;
        columns[column] = ~~columns[column] + 1;
    }

    let oddRows = 0;
    for (let i = 0; i < n; i++) {
        if (rows[i] & 1) {
            oddRows++;
        }
    }

    let oddColumns = 0;
    for (let j = 0; j < m; j++) {
        if (columns[j] & 1) {
            oddColumns++;
        }
    }

    return oddRows * (m - oddColumns) + (n - oddRows) * oddColumns;
}
