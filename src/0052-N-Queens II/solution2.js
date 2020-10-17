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

    const columnSet = new Set();
    const leftTopSet = new Set();
    const rightTopSet = new Set();

    function backTrace(rowCount) {
        if (rowCount === n) {
            count++;
            return;
        }

        for (let colCount = 0; colCount < n; colCount++) {
            const leftTopPos = rowCount - colCount;
            const rightTopPos = rowCount + colCount;
            if (
                !columnSet.has(colCount) &&
                !leftTopSet.has(leftTopPos) &&
                !rightTopSet.has(rightTopPos)
            ) {
                columnSet.add(colCount);
                leftTopSet.add(leftTopPos);
                rightTopSet.add(rightTopPos);
                backTrace(rowCount + 1);
                columnSet.delete(colCount);
                leftTopSet.delete(leftTopPos);
                rightTopSet.delete(rightTopPos);
            }
        }
    }

    backTrace(0);

    return count;
}
