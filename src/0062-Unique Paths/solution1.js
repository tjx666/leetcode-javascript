/**
 * 题述：不同路径
 * 思路：DFS 穷举，超时
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    let pathCount = 0;
    const memorizedTable = new Array(m);
    for (let i = 0; i < m; i++) {
        memorizedTable[i] = new Array(n).fill(false);
    }

    function findPath(x, y) {
        if (memorizedTable[x][y] || x >= m || y >= n) return;
        memorizedTable[x][y] = true;

        if (x === m - 1 && y === n - 1) {
            pathCount++;
            return;
        }

        if (x + 1 < m) {
            findPath(x + 1, y);
        }

        if (y + 1 < n) {
            findPath(x, y + 1);
        }
    }
    findPath(0, 0);

    return pathCount;
}

uniquePaths(3, 2);
