/**
 * 题述：
 * 我们把符合下列属性的数组 A 称作山脉：
 * A.length >= 3
 * 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
 * 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。
 * 思路：
 * 这题如果时间复杂度允许 n 的话那就太简单了，可以考虑使用二分法，分次取中减去一半数据范围
 * 二分法思想很简单，细节是魔鬼
 * 时间复杂度：logn
 * 空间复杂度: 1
 * @param {number[]} A
 * @return {number}
 */
function peakIndexInMountainArray(A) {
    let left = 0;
    let right = A.length - 1;
    while (left < right) {
        const mid = ((left + right) / 2) | 0;
        // 根据中间值是否小于前后值来判断其 mid 是在山峰左还是山峰右边，大于是没有用的，因为中间值大于两侧
        if (A[mid] < A[mid + 1]) {
            left = mid + 1;
        } else if (A[mid] < A[mid - 1]) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return left;
}
