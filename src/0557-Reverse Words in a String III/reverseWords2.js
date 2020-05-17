/**
 * 题述：
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 * 思路：在拆分后的字符串数组中利用首尾双指针逆序
 * 时间复杂度：n, 虽然是两层循环，但是实际耗时操作次数是 n
 * 空间复杂度：n
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    const chars = s.split('');
    for (let fast = 0, slow = 0, lastIndex = s.length - 1; fast <= lastIndex; fast++) {
        if (chars[fast] === ' ' || fast === lastIndex) {
            let left = slow;
            let right = fast === lastIndex ? fast : fast - 1;
            while (left < right) {
                [chars[left], chars[right]] = [chars[right], chars[left]];
                left++;
                right--;
            }
            slow = fast + 1;
        }
    }

    return chars.join('');
}

/*
执行用时 : 80 ms, 在所有 JavaScript 提交中击败了 93.80% 的用户
内存消耗 : 41.6 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
*/
