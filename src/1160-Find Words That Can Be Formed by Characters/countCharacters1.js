/**
 * 题述：拼写单词
 * 思路：为了避免每次判断一个单词能否由 chars 中的字符组成都需要搜索一遍 chars，可以使用 map 来保存 chars 信息
 * 时间复杂度： n，n 为所有字符串长度值之和
 * 空间复杂度： 26，其实可以优化成使用两个 map，key 最多为 26 个字母
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * @example
 *
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
 * Output: 6
 * Explanation:
 * The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
 *
 */
function countCharacters(words, chars) {
    const charsStat = new Map();
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        charsStat.set(char, ~~charsStat.get(char) + 1);
    }

    let result = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordStat = new Map();

        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            wordStat.set(char, ~~wordStat.get(char) + 1);
        }
        let flag = true;
        for (const key of wordStat.keys()) {
            if (~~charsStat.get(key) < wordStat.get(key)) {
                flag = false;
                break;
            }
        }
        if (flag) result += word.length;
    }

    return result;
}

countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach');
