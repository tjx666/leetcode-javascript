/**
 * 题述：如果数组是单调递增或单调递减的，那么它是单调的。当给定的数组 A 是单调数组时返回 true，否则返回 false。
 * 思路：照着定义去实现就好了
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} A
 * @return {boolean}
 */
function isMonotonic(A) {
    const { length } = A;
    if (length <= 1) return true;

    let store = 0;
    for (let i = 1; i < length; i++) {
        // eslint-disable-next-line no-nested-ternary
        const c = A[i] - A[i - 1] === 0 ? 0 : A[i] - A[i - 1] > 0 ? 1 : -1;
        if (store !== 0) {
            if (c !== 0 && c !== store) {
                return false;
            }
        } else {
            store = c;
        }
    }

    return true;
}
