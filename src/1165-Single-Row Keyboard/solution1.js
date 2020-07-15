/**
 * 题述：单行键盘，具体看原题 https://leetcode-cn.com/problems/single-row-keyboard/
 * 思路：两个字符串，时间复杂度最好应该是 m + n，双指针时间复杂度就不只 m + n 了，这里使用数组存储 26 个字符的位置
 * 时间复杂度：m + n, m, n 分别为 keyboard 和 word 的长度
 * 空间复杂度：1，长度为 26 的数组的空间是个常量，不会随规模变化而变化
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
function calculateTime(keyboard, word) {
    const table = new Array(26);
    const aCodePint = 'a'.codePointAt(0);
    for (let i = 0; i < 26; i++) {
        table[keyboard[i].codePointAt(0) - aCodePint] = i;
    }
    let distance = 0;
    let lastIndex = 0;
    for (let j = 0, len = word.length; j < len; j++) {
        const index = table[word[j].codePointAt(0) - aCodePint];
        distance += Math.abs(index - lastIndex);
        lastIndex = index;
    }
    return distance;
}
