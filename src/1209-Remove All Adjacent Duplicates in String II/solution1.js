/**
 * 题述：删除字符串中的所有相邻重复项 II，相对于 I 来说这次是删除连续 K 个，之前是是两个
 * 思路：正则
 * @param {string} S
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(S, k) {
    const repeatedKRE = new RegExp(`([a-z])\\1{${k - 1}}`, 'g');
    const replaced = S.replace(repeatedKRE, '');
    return replaced.length === S.length ? S : removeDuplicates(replaced, k);
}
