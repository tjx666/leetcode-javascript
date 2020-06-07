/**
 * 题述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 思路：和判断回文串一样，使用首尾双指针判断对应位置字符是否相同即可。只不过这道题允许你碰到一对不同的字符时删掉一个字符
 * 时间复杂度：n，最复杂的情况要遍历 2n 次，就是第一次比较的时候字符就不相同
 * 空间复杂度：0
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right && s[left] === s[right]) {
        left++;
        right--;
    }
    if (left >= right) {
        return true;
    }

    let i;
    let j;
    // 删掉左指针指向的元素
    for (i = left + 1, j = right; i < j; i++, j--) {
        if (s[i] !== s[j]) break;
    }
    if (i >= j) return true;

    // 删掉右指针指向的元素
    for (i = left, j = right - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;
}
