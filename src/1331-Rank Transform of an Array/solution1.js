/**
 * 题述：
 * 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。序号代表了一个元素有多大。序号编号的规则如下：
 * 序号从 1 开始编号。一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。每个数字的序号都应该尽可能地小。
 * 思路：首先是对数组进行排序，再遍历排序后的数组保存值和其下标的映射到 map，这个小标要考虑减去相同元素的数量
 * 时间复杂度：取决于排序的时间复杂度，其它的时间需要 n
 * 空间复杂度：n
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
    const { length } = arr;

    const sorted = [...arr].sort((a, b) => a - b);
    const map = new Map();
    // 被相同元素推后的数量
    let count = 0;
    for (let i = 0; i < length; i++) {
        const value = sorted[i];

        if (value === sorted[i - 1]) count++;

        if (!map.has(value)) {
            map.set(value, i + 1 - count);
        }
    }

    for (let i = 0; i < length; i++) {
        const index = map.get(arr[i]);
        sorted[i] = index;
    }

    return sorted;
}
