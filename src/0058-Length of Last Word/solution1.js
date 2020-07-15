/**
 * 题述：
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。
 * 如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。如果不存在最后一个单词，请返回 0。
 * 思路：从后往前遍历
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {string} str
 * @return {number}
 */
function lengthOfLastWord(str) {
    if (str.length === 0) return 0;

    let i = str.length - 1;
    while (i >= 0 && str[i] === ' ') {
        i--;
    }

    let len = 0;
    while (i >= 0) {
        if (str[i] !== ' ') {
            i--;
            len++;
        } else {
            break;
        }
    }

    return len;
}
