/**
 * 题述：给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 思路：这道题和 205. 同构字符串思路一样，
 * 时间复杂度：n，n 为 pattern 的长度
 * 空间复杂度：n
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 * @example
 *
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 *
 */
function wordPattern(pattern, str) {
    const words = str.split(/\s+/);
    const { length } = pattern;
    if (length !== words.length) return false;
    const map = new Map();
    const existedWords = new Set();
    for (let i = 0; i < length; i++) {
        const char = pattern[i];
        const word = words[i];
        if (map.has(char)) {
            if (word !== map.get(char)) return false;
        } else {
            map.set(char, word);
            if (existedWords.has(word)) return false;
            existedWords.add(word);
        }
    }

    return true;
}
