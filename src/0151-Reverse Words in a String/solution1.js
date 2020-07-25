/**
 * 题述： 翻转字符串里的单词
 * 说明：
 * 无空格字符构成一个单词。
 * 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 * 思路：不考虑复杂度，在平时业务中的写法
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}
