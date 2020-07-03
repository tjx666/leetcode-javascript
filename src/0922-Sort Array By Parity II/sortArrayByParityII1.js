/**
 * 题述：按奇偶排序数组 II
 * 思路：借助一个额外的数组，遍历到偶数就插到偶下标，遍历到技术就插到奇下标
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParityII(A) {
    const copyArray = [...A];
    const { length } = A;
    for (let i = 0, evenIndex = 0, oddIndex = 1; i < length; i++) {
        if (copyArray[i] % 2 === 0) {
            A[evenIndex] = copyArray[i];
            evenIndex += 2;
        } else {
            A[oddIndex] = copyArray[i];
            oddIndex += 2;
        }
    }
    return A;
}
