/**
 * 题述：判断字符串子序列
 * 思路：双指针
 * 时间复杂度：t 的长度
 * 空间复杂度：1
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
    if (s.length > t.length) return false;
    if (s.length === 0) return true;

    let i = 0;
    let j = 0;
    while (j < t.length) {
        if (s.length - i > t.length - j) return false;

        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }

        if (i === s.length) return true;
    }
    return false;
}
