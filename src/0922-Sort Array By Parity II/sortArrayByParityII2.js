/**
 * 题述：按奇偶排序数组 II
 * 思路：
 * 双指针，我们只要将偶数节点排好奇数自然就全是奇数，使用 i 扫描偶数下标，如果该位置值是奇数，说明奇数下标肯定有一个位置也被偶数占了
 * 这时，使用 j 扫描奇下标，只要找到一个偶数就可以和 i 交换，将 i 位置数据改为偶数
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParityII(A) {
    for (let i = 0, j = 1, len = A.length; i < len; i += 2) {
        if (A[i] % 2 !== 0) {
            while (A[j] % 2 !== 0) {
                j += 2;
            }
            [A[i], A[j]] = [A[j], A[i]];
            j += 2;
        }
    }
    return A;
}
