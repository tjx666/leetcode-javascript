/**
 * 题述：给定两个由一些闭区间组成的列表，每个区间列表都是成对不相交的，并且已经排序。返回这两个区间列表的交集。
 * 思路：双指针
 * 时间复杂度：m + n
 * 空间复杂度：m + n
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
function intervalIntersection(A, B) {
    if (A.length === 0 || B.length === 0) return [];

    const result = [];
    let i = 0;
    let j = 0;
    while (i < A.length && j < B.length) {
        // 右边界更小的那个
        const littleEnd = Math.min(A[i][1], B[j][1]);
        // 左边界更大的那个
        const biggerStart = Math.max(A[i][0], B[j][0]);
        if (littleEnd >= biggerStart) {
            result.push([biggerStart, littleEnd]);
        }
        // 最多相交一次
        if (A[i][1] < B[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}
