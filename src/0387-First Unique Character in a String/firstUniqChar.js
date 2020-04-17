/**
 * 题述：查找字符串中第一个不重复字符，给定的字符串都是小写字母
 * 思路：使用 map 存储遍历过的字符串，可以利用 JS 中的 Map.prototype.entries 返回的数组是和插入的顺序一致的
 * 算法复杂度：扫描 2 边，2n
 * 空间复杂度：n
 *
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    const { length } = s;
    if (length === 0) return -1;

    const traveledMap = new Map();
    for (let i = 0; i < length; i++) {
        if (!traveledMap.has(s[i])) {
            traveledMap.set(s[i], i);
        } else {
            traveledMap.set(s[i], -1);
        }
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [_key, value] of traveledMap.entries()) {
        if (value !== -1) {
            return value;
        }
    }

    return -1;
}
