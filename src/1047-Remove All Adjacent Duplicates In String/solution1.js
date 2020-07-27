/**
 * 题述：删除字符串中的所有相邻重复项
 * 思路：正则
 * @param {string} S
 * @return {string}
 */
function removeDuplicates(S) {
    const replaced = S.replace(/(([a-z])\2)+/g, '');
    return replaced.length === S.length ? S : removeDuplicates(replaced);
}
