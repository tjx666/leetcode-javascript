/**
 * 题述：访问所有点的最小时间
 * 思路：两个点间走的最短时间应该是直接走水平和垂直距离更长的那个距离需要的时间
 * 时间复杂度：n, n 为点的数量
 * 空间复杂度：1
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
    let costTime = 0;
    for (let i = 1; i < points.length; i++) {
        const x = Math.abs(points[i][0] - points[i - 1][0]);
        const y = Math.abs(points[i][1] - points[i - 1][1]);
        costTime += Math.min(x, y);
    }
    return costTime;
}
