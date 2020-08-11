/**
 * 题述：
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 * 思路：
 * 矩阵的题一般要求·时间复杂度低于 n²，但是我们如果使用二重循环遍历，
 * 当遍历到一个 'O' 时你无法立即判断这个元素是否是被包围了，因此，可以考虑先遍历一遍做个标记
 * 考虑到，如果一个元素没有被包围，势必可以最终从边界走出
 * 我们可以从所有的边界 'O' 开始，枚举所有连续走 'O' 的路径，将元素值赋值为 'Y'，表示该可以通过该元素走出包围
 * 再次遍历所有元素，剩下的所有 'O‘ 元素都是从边界无法到达的，也就是被包围的
 * 时间复杂度：m *  n
 * 空间复杂度：max(m, n);
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
    const rowCount = board.length;
    if (rowCount === 0) return board;
    const colCount = board[0].length;
    if (colCount.length === 0) return board;

    function mark(i, j) {
        if (i < 0 || i >= rowCount || j < 0 || j > colCount || board[i][j] !== 'O') return;

        board[i][j] = 'Y';
        mark(i - 1, j);
        mark(i + 1, j);
        mark(i, j - 1);
        mark(i, j + 1);
    }

    for (let j = 0; j < colCount; j++) {
        mark(0, j);
        mark(rowCount - 1, j);
    }
    for (let i = 0; i < rowCount; i++) {
        mark(i, 0);
        mark(i, colCount - 1);
    }

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            const char = board[i][j];
            if (char === 'O') {
                board[i][j] = 'X';
            } else if (char === 'Y') {
                board[i][j] = 'O';
            }
        }
    }
}
