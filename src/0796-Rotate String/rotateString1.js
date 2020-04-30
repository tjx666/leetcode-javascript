/**
 * 题述：给定两个字符串 A 和 B，判断 B 是否是 A 的旋转字符串之一
 * 思路：将 A 的所有旋转字符串和 B 比较
 * 时间复杂度：n 为字符串长度, n²
 * 空间复杂度：0
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString(A, B) {
    if (A.length !== B.length) return false;

    const { length } = A;
    for (let i = 0, flag = true; i < length; i++, flag = true) {
        for (let j = 0; j < length; j++) {
            if (A[(i + j) % length] !== B[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return true;
        }
    }

    return false;
}
