/**
 * Nim 游戏
 *
 * 轮到你的时候如果是 4 的倍数就会输，不是 4 的倍数你就可以让对方是 4 的倍数，对方就会输，自己赢
 *
 * 时间复杂度：1
 * 空间复杂度：1
 *
 * @param {number} n
 * @returns {boolean}
 */
function canWinNim(n) {
    return n % 4 !== 0;
}

module.exports = canWinNim;
