/**
 * 题述：判断一个单词是否大写合法
 * 1. 所有字符都是小写字母
 * 2. 所有字符都是大写字母
 * 3. 不止一个字符，首字母大写
 *
 * 思路：别想多了，正则表达式发明出来不就是为了处理字符串的吗？放着简洁的解法不去用，尽想些花里胡哨的
 *
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
    return /(^[a-z]+$)|(^[A-Z]+$)|(^[A-Z][a-z]+$)/.test(word);
}
