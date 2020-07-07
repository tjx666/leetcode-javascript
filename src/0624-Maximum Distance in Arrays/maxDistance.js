/* eslint-disable prefer-destructuring */
/**
 * 题述：
 * 给定 m 个数组，每个数组都已经按照升序排好序了。现在你需要从两个不同的数组中选择两个整数（每个数组选一个）并且计算它们的距离。
 * 两个整数 a 和 b 之间的距离定义为它们差的绝对值 |a-b|。你的任务就是去找到最大距离
 * 思路：
 * 所求结果只和每组数中的最大最小值有关，只需要遍历一遍 arrays，遍历过程中更新遍历过的组中最大值和最小值，和当前组最大最小值取绝对值即可
 * 本质还是动态规划，设 arrays 长度为 n，maxDistance(n) = Math.max(maxDistance(n - 1), Math.abs(cMax - min), Math.abs(cMin - max))
 * 时间复杂度：n，n 为 arrays 的长度
 * 空间复杂度：1
 * @param {number[][]} arrays
 * @return {number}
 */
function maxDistance(arrays) {
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];
    let res = -Infinity;
    for (let i = 1, len = arrays.length; i < len; i++) {
        const array = arrays[i];
        const cMin = array[0];
        const cMax = array[array.length - 1];
        res = Math.max(res, Math.abs(cMax - min), Math.abs(cMin - max));
        if (cMin < min) min = cMin;
        if (cMax > max) max = cMax;
    }
    return res;
}
