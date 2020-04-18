/**
 * 题述：求字符串数组所有字符串的最长公共前缀
 * 思路：再遍历第一个字符串的时候使用二分法
 * 算法复杂度：假设有 m 个长度为 n 的元素，二分遍历复杂度 logn，因此总的复杂度就算 m * logn
 * 空间复杂度：没有使用额外空间，常数级别
 *
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    const firstStr = strs[0];
    if (strs.length === 1) return firstStr;

    let minLen = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLen) {
            minLen = strs[i].length;
        }
    }

    let left = 1;
    let right = minLen;
    while (left <= right) {
        const mid = ((left + right) / 2) | 0;
        const isPrefix = strs.every((str) => str.startsWith(firstStr.slice(0, mid)));
        if (isPrefix) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return firstStr.slice(0, ((left + right) / 2) | 0);
}
