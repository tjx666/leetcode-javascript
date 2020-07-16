/**
 * 题述：
 * 给你一个数字数组 arr 。如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
 * 如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。
 * 思路：
 * 最容易想到的是先排序再按照定义遍历一遍，但是这没有利用到等差数列的等差性质
 * 可以先遍历一遍获取最大最小值，计算出所有中间值，判断这些值是否都存在
 * 时间复杂度：n，遍历了两遍
 * 空间复杂度：n
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
    const { length } = arr;
    if (length <= 2) return true;

    const map = new Map();
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < length; i++) {
        const value = arr[i];
        map.set(value, ~~map.get(value) + 1);
        if (value < min) min = value;
        if (value > max) max = value;
    }
    const diff = (max - min) / (arr.length - 1);
    for (let i = 0, v = min; i < length; i++, v += diff) {
        const count = ~~map.get(v);
        if (count === 0) {
            return false;
        }
        map.set(v, count - 1);
    }
    return true;
}
