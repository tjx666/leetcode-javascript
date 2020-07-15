/**
 * 题述：删除字符串中的原因字符
 * 思路：使用正则替换，我猜 V8 底层是直接用 c++ 实现的替换，不会产生多余的字符串
 * @param {string} S
 * @return {string}
 */
function removeVowels(S) {
    return S.replace(/a|e|i|o|u/g, '');
}
