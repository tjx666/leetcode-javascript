/**
 * 题述：判断是否是回文串，只考虑数字和字母
 * 思路：
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    const trimStr = s.replace(/[^a-zA-Z\d]/g, '').toLowerCase();
    return trimStr === trimStr.split('').reverse().join('');
}
