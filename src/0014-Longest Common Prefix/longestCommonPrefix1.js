/**
 * 题述：求字符串数组所有字符串的最长公共前缀
 * 思路：取第一个字符串元素，遍历它，如果当前字符不在其它字符串元素相同坐标，就直接返回第一个字符串截取到该位置
 * 算法复杂度：假设有 m 个长度为 n 的元素，那么最差的情况就是 n * m
 * 空间复杂度：没有使用额外空间，常数级别
 *
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    const firstStr = strs[0];
    if (strs.length === 1) return firstStr;

    for (let i = 0; i < firstStr.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstStr[i]) {
                return firstStr.slice(0, i);
            }
        }
    }

    return firstStr;
}
