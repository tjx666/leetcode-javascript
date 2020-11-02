/**
 * 题述：求岛屿的周长
 * 思路：直接遍历一遍判断有几个相邻边即可，没有相邻边 +4，有一个相邻边 -1
 * 时间复杂度：m * n
 * 空间复杂度: 0
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
    const rowCount = grid.length;
    if (rowCount === 0) return 0;

    const columnCount = grid[0].length;
    if (columnCount === 0) return 0;

    let perimeter = 0;
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;

                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter--;
                }

                if (i < rowCount - 1 && grid[i + 1][j] === 1) {
                    perimeter--;
                }

                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter--;
                }

                if (j < columnCount - 1 && grid[i][j + 1] === 1) {
                    perimeter--;
                }
            }
        }
    }

    return perimeter;
}
