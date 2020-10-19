/**
 * 题述：比较含退格的字符串, 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 思路：
 * 类似两个字符串，两个数组一般时间复杂度我们最好能控制到 m + n, 一般遍历是不可避免的，其实可以直接两个尾指针遍历
 * 字符串后面的结果是不受前面字符串的影响的，可以先比较后面的字符串来判断最后结果是否相等
 * 时间复杂度：m + n
 * 空间复杂度：常数级
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let skipS = 0;
    let skipT = 0;

    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            const char = S[i];
            if (char === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }

        while (j >= 0) {
            const char = T[j];
            if (char === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }

        if (i >= 0 && j >= 0) {
            if (S[i] !== T[j]) return false;
        } else if (i >= 0 || j >= 0) {
            return false;
        }
        i--;
        j--;
    }

    return true;
}
