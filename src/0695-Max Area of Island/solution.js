/**
 * 题述：岛屿的最大面积
 * 思路：深搜
 * 时间复杂度：m * n
 * 空间复杂度：常数级
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    const rawCount = grid.length;
    if (rawCount === 0) return 0;

    const columnCount = grid[0].length;
    if (columnCount === 0) return 0;

    function getArea(i, j, area) {
        area += 1;
        grid[i][j] = 0;

        if (i > 0 && grid[i - 1][j] === 1) {
            area = getArea(i - 1, j, area);
        }

        if (i < rawCount - 1 && grid[i + 1][j] === 1) {
            area = getArea(i + 1, j, area);
        }

        if (j > 0 && grid[i][j - 1] === 1) {
            area = getArea(i, j - 1, area);
        }

        if (j < columnCount - 1 && grid[i][j + 1] === 1) {
            area = getArea(i, j + 1, area);
        }

        return area;
    }

    let maxArea = 0;
    for (let i = 0; i < rawCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            if (grid[i][j] === 1) {
                const area = getArea(i, j, 0);
                if (area > maxArea) maxArea = area;
            }
        }
    }

    return maxArea;
}

maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
]);
