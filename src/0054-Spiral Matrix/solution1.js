/**
 * 题述：螺旋矩阵
 * 思路：
 * 模拟螺旋遍历，使用一个方向数组来保存表示当前的 i, j 增量，为了不重复遍历，可以标记已经遍历给过的元素
 * 当遍历过的元素数量等同于 m * n 时，遍历结束
 * 时间复杂度：m * n
 * 空间复杂度：m * n
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const matrixCloned = JSON.parse(JSON.stringify(matrix));
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const rowCount = matrix.length;
    if (rowCount === 0) return [];
    const colCount = matrix[0].length;
    if (colCount === 0) return [];

    const totalCount = rowCount * colCount;
    const result = new Array(totalCount);
    let index = 0;
    let directionIndex = 0;
    let i = 0;
    let j = 0;
    let [iStep, jStep] = directions[directionIndex % 4];
    while (index < totalCount) {
        matrixCloned[i][j] = null;
        result[index] = matrix[i][j];
        index++;
        const nextI = i + iStep;
        const nextJ = j + jStep;
        if (
            nextI < 0 ||
            nextI >= rowCount ||
            nextJ < 0 ||
            nextJ >= colCount ||
            matrixCloned[nextI][nextJ] === null
        ) {
            directionIndex++;
            [iStep, jStep] = directions[directionIndex % 4];
        }
        i += iStep;
        j += jStep;
    }

    return result;
}
