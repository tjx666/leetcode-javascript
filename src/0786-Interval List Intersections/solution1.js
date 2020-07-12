/**
 * 题述：给定两个由一些闭区间组成的列表，每个区间列表都是成对不相交的，并且已经排序。返回这两个区间列表的交集。
 * 思路：两层循环
 * 时间复杂度：m * n
 * 空间复杂度：min(m, n)
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
function intervalIntersection(A, B) {
    const result = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (B[j][0] <= A[i][1] && A[i][1] <= B[j][1]) {
                result.push([Math.max(A[i][0], B[j][0]), A[i][1]]);
            } else if (B[j][0] <= A[i][0] && A[i][0] <= B[j][1]) {
                result.push([A[i][0], B[j][1]]);
            } else if (A[i][0] <= B[j][0] && A[i][1] >= B[j][1]) {
                result.push(B[j]);
            }
        }
    }
    return result;
}
