/**
 * 题述：
 * 给出三个均为 严格递增排列 的整数数组 arr1，arr2 和 arr3。返回一个由 仅 在这三个数组中 同时出现 的整数所构成的有序数组。
 * 思路：直接使用 map 统计每个数字出现的个数
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
function arraysIntersection(arr1, arr2, arr3) {
    const map = new Map();
    for (let i = 0, len = arr1.length; i < len; i++) {
        const value = arr1[i];
        map.set(value, ~~map.get(value) + 1);
    }
    for (let i = 0, len = arr2.length; i < len; i++) {
        const value = arr2[i];
        map.set(value, ~~map.get(value) + 1);
    }
    for (let i = 0, len = arr3.length; i < len; i++) {
        const value = arr3[i];
        map.set(value, ~~map.get(value) + 1);
    }
    const result = [];
    for (const key of map.keys()) {
        if (map[key] === 3) {
            result.push(key);
        }
    }
    return result;
}
