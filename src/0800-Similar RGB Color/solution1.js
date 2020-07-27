/**
 * 题述：https://leetcode-cn.com/problems/similar-rgb-color/
 * 思路：
 * 相似度公式其实是取每一种颜色值的方差，题目要求相似度最高且可以简写，可以分别算出每种颜色值和给定颜色值最接近且可以简写的值
 * 可以简写的都是两位 16 进制相同，例如 xx，xx 等于 16 * x + x 也就是 17x，是 17 的倍数
 * 时间复杂度：1
 * 空间复杂度：1
 * @param {string} color
 * @return {string}
 */
function similarRGB(color) {
    const channels = [];
    for (let i = 1; i < color.length; i += 2) {
        const channel = parseInt(color.slice(i, i + 2), 16);
        const mod = channel % 17;
        const similarChannel = (mod > 8 ? channel + 17 - mod : channel - mod)
            .toString(16)
            .padStart(2, '0');
        channels.push(similarChannel);
    }
    return `#${channels.join('')}`;
}
