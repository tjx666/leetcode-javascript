/**
 * 题述： 罗马数字字符串转整数
 * 算法复杂度：n
 * 空间复杂度：1
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

    const len = s.length;
    let result = 0;
    let i = 0;
    while (i < len) {
        const twoChar = s.slice(i, i + 2);
        // 先取 2 个字符的罗马数字，考虑 s 为 IV 的情况，先取单个字符串就是 6 了
        if (mapper.has(twoChar)) {
            result += mapper.get(twoChar);
            i += 2;
        } else {
            result += mapper.get(s[i]);
            i++;
        }
    }
    return result;
}
