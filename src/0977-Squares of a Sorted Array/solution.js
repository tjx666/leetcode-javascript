/**
 * 题述：给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 * 思路：首尾双指针
 * 时间复杂度：n
 * 空间复杂度：常数级
 * @param {number[]} A
 * @return {number[]}
 * @example
 *
 * 输入：[-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 *
 */
function sortedSquares(A) {
    const { length } = A;

    if (length === 0) return A;

    const result = new Array(A.length);

    let i = 0;
    let j = length - 1;
    let k = length - 1;
    while (i <= j) {
        const squareA = A[i] * A[i];
        const squareB = A[j] * A[j];
        if (squareA >= squareB) {
            result[k] = squareA;
            i++;
        } else {
            result[k] = squareB;
            j--;
        }
        k--;
    }

    return result;
}
