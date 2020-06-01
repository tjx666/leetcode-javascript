/**
 * 题述：
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 * 思路：
 * 先根据数字数组计算出表示的数字，再求和，但是可能这个数字比较大，加到后面超出最大安全数，会有精度丢失
 * 所以，这道题还是把它转换成大数相加来计算，具体来说就是将 K 转换成字符串数组好了
 * 复杂度参考大数相加
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 * @example
 *
 * Input: A = [1,2,0,0], K = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 *
 * Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
 * Output: [1,0,0,0,0,0,0,0,0,0,0]
 * Explanation: 9999999999 + 1 = 10000000000
 *
 */
function addToArrayForm(A, K) {
    const KArr = K.toString(10).split('');
    const result = [];
    let i = A.length - 1;
    let j = KArr.length - 1;
    let carryBit = 0;
    while (i >= 0 || j >= 0 || carryBit === 1) {
        const sum = ~~A[i] + ~~KArr[j] + carryBit;
        carryBit = sum >= 10 ? 1 : 0;
        result.unshift(sum % 10);
        i--;
        j--;
    }
    return result;
}
