/**
 * 题述：获取数组中所有和能够整除 60 的 2 元组
 * 限制：1 <= time[i]
 * 思路：想在线性复杂度解决这个问题，必须在遍历过程中保存之前遍历获取的信息，和 two sum 有点类似，不同的是这里取值要对 60 取模
 * 时间复杂度：n
 * 空间复杂度：1，因为 key 是 0 ~ 59
 * @param {number[]} time
 * @return {number}
 */
function numPairsDivisibleBy60(time) {
    const map = new Map();
    let pairsCount = 0;
    for (let i = 0; i < time.length; i++) {
        const currentTime = time[i];
        const mod = currentTime % 60;
        const visitedCount = ~~map.get(mod);
        pairsCount += visitedCount;
        const needValue = mod === 0 ? 0 : 60 - mod;
        map.set(needValue, ~~map.get(needValue) + 1);
    }
    return pairsCount;
}
