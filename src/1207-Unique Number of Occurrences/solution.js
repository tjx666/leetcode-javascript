/**
 * 题述：
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 * 思路：时间复杂度不可能低于 n，不考虑空间复杂度，第一时间想到的就是使用 map 统计每个数的个数，判断是否有重复的个数即可
 * 时间复杂度和空间复杂度都是 n
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const count = ~~map.get(num);
        map.set(num, count + 1);
    }
    return new Set(map.values()).size === map.size;
}
