/**
 * 题述：给定已经按升序排列、由不同整数组成的数组 A，返回满足 A[i] == i 的最小索引 i。如果不存在这样的 i，返回 -1。
 * 思路：二分
 * 时间复杂度：lgn
 * 空间复杂度：1
 * @param {number[]} A
 * @return {number}
 * @example
 *
 * Input: [-10,-5,0,3,7]
 * Output: 3
 *
 */
function fixedPoint(A) {
    let left = 0;
    let right = A.length - 1;
    let ans = -1;
    while (left <= right) {
        const mid = ((left + right) / 2) | 0;
        const val = A[mid];

        // 题目要求满足条件的最小索引，因此即便是相等也要继续往 mid 左边找找看有没有满足条件的下标
        if (val >= mid) {
            right = mid - 1;
            if (val === mid) {
                if (ans === -1) {
                    ans = mid;
                } else {
                    ans = Math.min(ans, mid);
                }
            }
        } else if (val < mid) {
            left = mid + 1;
        }
    }

    return ans;
}
