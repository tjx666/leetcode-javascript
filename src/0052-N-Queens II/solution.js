/**
 * 题述： n 皇后 II
 * 思路：回溯
 * 时间复杂度：不好算，低于 n!
 * 空间复杂度：n²
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
    let count = 0;
    const chessBoard = new Array(n);
    for (let i = 0; i < n; i++) {
        chessBoard[i] = new Array(n).fill(null);
    }

    function checkPosition(rowCount, colCount) {
        // same column
        for (let i = 0; i < rowCount; i++) {
            if (chessBoard[i][colCount] === 'Q') {
                return false;
            }
        }

        // left top
        for (let i = rowCount - 1, j = colCount - 1; i >= 0 && j >= 0; i--, j--) {
            if (chessBoard[i][j] === 'Q') {
                return false;
            }
        }

        // right top
        for (let i = rowCount - 1, j = colCount + 1; i >= 0 && j < n; i--, j++) {
            if (chessBoard[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }

    function backTrace(rowCount) {
        if (rowCount === n) {
            count++;
            return;
        }

        const row = chessBoard[rowCount];
        for (let colCount = 0; colCount < n; colCount++) {
            if (checkPosition(rowCount, colCount)) {
                chessBoard[rowCount][colCount] = 'Q';
                backTrace(rowCount + 1);
                chessBoard[rowCount][colCount] = null;
            }
        }
    }

    backTrace(0);

    return count;
}
