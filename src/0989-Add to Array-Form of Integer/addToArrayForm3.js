/**
 * 题述：
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 * 思路：和思路 2 不一样的是，我们可以直接使用 K 累加计算
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
    const result = [];
    let i = A.length - 1;
    while (i >= 0 || K > 0) {
        K += ~~A[i];
        result.unshift(K % 10);
        K = ~~(K / 10);
        i--;
    }
    return result;
}
