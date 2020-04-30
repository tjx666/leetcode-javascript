/**
 * 题述：判断字符串是否是同构的
 * 思路：使用 map 保存 s 中的字符和 t 中相同下标的字符映射，因为题目限制不同字符不能映射到同一个字符，因此需要遍历两次
 * 时间复杂度：n, n 为字符串长度，遍历两遍，因此是 n
 * 空间复杂度：n, 需要两个 map，当 s 中字符串所有字符都不相等时，map 的长度为 n
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    function helper(_s, _t) {
        const map = new Map();
        for (let i = 0, len = _s.length; i < len; i++) {
            if (map.get(_s[i])) {
                if (map.get(_s[i]) !== _t[i]) return false;
            } else {
                map.set(_s[i], _t[i]);
            }
        }
        return true;
    }

    return helper(s, t) && helper(t, s);
}
