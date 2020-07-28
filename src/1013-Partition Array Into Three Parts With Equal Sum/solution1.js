/**
 * 题述：
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 形式上，如果可以找出索引 i+1 < j 且满足
 * A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1] 就可以将数组三等分
 * 思路：利用三部分和相等，可以得出每一部分的和为总和三分之一，再遍历一遍，如果能找到连续两段和为总和三分之一的子数组，且总长度小于 A 的总长度，返回 true
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} A
 * @return {boolean}
 */
function canThreePartsEqualSum(A) {
    const { length } = A;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += A[i];
    }
    if (sum % 3 !== 0) return false;

    const oneThird = sum / 3;
    let j = 0;
    let temp = A[0];
    // 贪心，等于三分一就当作第一段，继续往后再累计一段和为 0 的元素只会降低后面再找一组和三分之一总和的元素概率
    while (j < length && temp !== oneThird) {
        j++;
        temp += A[j];
    }
    if (j === length) return false;

    let k = j + 1;
    temp = A[k];
    while (k < length - 1 && temp !== oneThird) {
        k++;
        temp += A[k];
    }
    return k !== length - 1;
}
