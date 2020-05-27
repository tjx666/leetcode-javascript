/**
 * 题述：给定一个字符串，判断该字符串中是否可以通过重新排列组合，形成一个回文字符串。
 * 思路：
 * 如果长度为偶数，不同值出现的次数只能是偶数次
 * 如果长度是奇数，出现奇数次数的值只能有一个
 * 时间复杂度：n，n 为 s 长度
 * 空间复杂度：n
 * @param {string} s
 * @return {boolean}
 * @example
 *
 * Input: "code"
 * Output: false
 *
 * Input: "aab"
 * Output: true
 *
 */
function canPermutePalindrome(s) {
    const map = new Map();
    for (const char of s) {
        const count = ~~map.get(char);
        map.set(char, count + 1);
    }

    const isOddLength = s.length % 2 !== 0;
    let oddCount = 0;
    for (const count of map.values()) {
        // 碰到个数为奇数
        if (count % 2 !== 0) {
            if (isOddLength) {
                if (oddCount === 1) return false;
                oddCount++;
            } else {
                return false;
            }
        }
    }

    return true;
}
