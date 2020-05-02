/**
 * 题述：给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。你可以返回满足此条件的任何数组作为答案。
 * 思路：快慢双指针，慢指针保存最后一个偶数下标
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParity(A) {
    const { length } = A;
    if (length === 0) return A;

    let slow = -1;
    for (let fast = 0; fast < length; fast++) {
        if (A[fast] % 2 === 0) {
            [A[slow + 1], A[fast]] = [A[fast], A[slow + 1]];
            slow++;
        }
    }

    return A;
}
