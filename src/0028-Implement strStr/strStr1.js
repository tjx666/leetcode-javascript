/**
 * 题述：
 * 实现 strStr() 函数。给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1，当 needle 是空字符串时我们应当返回 0 。
 * 思路：最只管的思路是两层 for 循环，将 haystack 每一个字符当作 needle 的起点，判断接下来 needle 长度的字符是否和 haystack 一样
 * 时间复杂度: （m - n） * n，m, n 分别为 haystack 和 needle 的长度
 * 空间复杂度：1
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let flag = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) return i;
    }
    return -1;
}
