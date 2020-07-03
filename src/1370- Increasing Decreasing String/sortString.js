/**
 * 题述：上升下降字符串
 * 限制：1 <= s.length <= 500，s 只包含小写英文字母。
 * 思路：使用数组来存字符出现次数，相对于 hashmap 而言，优点有序的，可以根据下标算出对应的字符
 * 时间复杂度：s 的长度
 * @param {string} s
 * @return {string}
 */
function sortString(s) {
    const charCounts = new Array(26).fill(0);
    for (let i = 0, len = s.length; i < len; i++) {
        charCounts[s[i].codePointAt(0) - 97]++;
    }

    let str = '';
    while (true) {
        let hasLeft = false;
        for (let i = 0; i < 26; i++) {
            if (charCounts[i] !== 0) {
                hasLeft = true;
                break;
            }
        }
        if (!hasLeft) return str;

        for (let i = 0; i < 26; i++) {
            if (charCounts[i] !== 0) {
                str += String.fromCharCode(97 + i);
                charCounts[i]--;
            }
        }

        for (let i = 25; i >= 0; i--) {
            if (charCounts[i] !== 0) {
                str += String.fromCharCode(97 + i);
                charCounts[i]--;
            }
        }
    }

    // eslint-disable-next-line no-unreachable
    return str;
}
