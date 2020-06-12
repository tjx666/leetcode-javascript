/**
 * 题述：判断给定的一组点是否在一条线上
 * 思路：其实是道几何题
 * 时间复杂度：n
 * 空间复杂度: 1
 * @param {number[][]} coordinates
 * @return {boolean}
 */
function checkStraightLine(coordinates) {
    const { length } = coordinates;
    const x1 = coordinates[0][0];
    const y1 = coordinates[0][1];
    const x2 = coordinates[1][0];
    const y2 = coordinates[1][1];

    for (let i = 2; i < coordinates.length; i++) {
        const x = coordinates[i][0];
        const y = coordinates[i][1];

        // x - x1 / y - y1
        // ===
        // x2 - x1 / y2 - y1
        if ((x - x1) * (y2 - y1) !== (y - y1) * (x2 - x1)) {
            return false;
        }
    }

    return true;
}
