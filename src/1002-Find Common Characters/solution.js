/**
 * 题述：查找常用字符
 * 思路：类似的查找数组公共最大最小的题都可以一遍遍历每个元素，一遍更新最大最小值
 * 时间复杂度：m * (n + 26), m 为单个字符串长度，n 为 A 长度
 * 空间复杂度：常数级，长度为 26 的数字数组
 * @param {string[]} A
 * @return {string[]}
 */
function commonChars(A) {
    function getCharIndex(letter) {
        const aCodePoint = 'a'.codePointAt(0);
        return letter.codePointAt(0) - aCodePoint;
    }
    const minFeqArray = new Array(26).fill(Infinity);
    for (const str of A) {
        const feqArray = new Array(26).fill(0);
        for (const char of str) {
            feqArray[getCharIndex(char)]++;
        }
        for (let i = 0; i < 26; i++) {
            const charFeq = feqArray[i];
            const minFeq = minFeqArray[i];
            minFeqArray[i] = Math.min(minFeq, charFeq);
        }
    }

    const ans = [];
    for (let i = 0; i < 26; i++) {
        const char = 'abcdefghijklmnopqrstuvwxyz'[i];
        const charMinFeq = minFeqArray[i];
        ans.push(...char.repeat(charMinFeq));
    }

    return ans;
}
