/**
 * 题述： 罗马数字字符串转整数
 * 思路：遍历字符串，看最近两个字符是不是 mapper 中的有效字符，不是的话就取当前字符代表的值
 * 算法复杂度：n
 * 空间复杂度：常数级别
 *
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const mapper = new Map([
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ]);

    let result = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        if (i + 1 <= len) {
            const nearTwoChar = s.slice(i, i + 2);
            if (mapper.has(nearTwoChar)) {
                result += mapper.get(nearTwoChar);
                i++;
                continue;
            }
        }

        result += mapper.get(s[i]);
    }

    return result;
}
