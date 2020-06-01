/**
 * 题述：
 * 给你一个整数数组 A 和一个整数 K，请在该数组中找出两个元素，使它们的和小于 K 但尽可能地接近 K，返回这两个元素的和。
 * 如不存在这样的两个元素，请返回 -1。
 * 思路：先排序，再首尾双指针
 * 时间复杂度：nlogn，取决于排序算法的时间复杂度
 * 空间复杂度：取决于排序算法的空间复杂度
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function twoSumLessThanK(A, K) {
    A.sort((a, b) => a - b);
    let maxSum = -Infinity;
    let head = 0;
    let tail = A.length - 1;
    while (head < tail) {
        const sum = A[head] + A[tail];
        if (sum >= K) {
            tail--;
        } else if (sum < K) {
            head++;
            if (sum > maxSum) maxSum = sum;
        }
    }

    return maxSum === -Infinity ? -1 : maxSum;
}
