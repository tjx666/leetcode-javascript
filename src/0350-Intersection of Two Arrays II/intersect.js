/**
 * 题述：给定两个数组，编写一个函数来计算它们的交集。
 * 思路：
 * 为了优化空间占用，先遍历长度更短的数组，使用 map 保存不同值对应的个数信息
 * 再遍历长度更长的数组，遍历每个元素时查询 map 是否存在，存在的话将其计数减一，并添加到结果数组
 * 时间复杂度：m + n
 * 空间复杂度：min(m, n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @example
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 */
function intersect(nums1, nums2) {
    let longerNums = nums1;
    let shorterNums = nums2;

    if (nums1.length < nums2.length) {
        [longerNums, shorterNums] = [shorterNums, longerNums];
    }
    if (shorterNums.length === 0) {
        return [];
    }

    const result = [];
    const map = new Map();
    for (let i = 0, len = shorterNums.length; i < len; i++) {
        const value = shorterNums[i];
        const count = ~~map.get(value);
        map.set(value, count + 1);
    }

    for (let j = 0, len = longerNums.length; j < len; j++) {
        const value = longerNums[j];
        const count = ~~map.get(value);
        if (count !== 0) {
            result.push(longerNums[j]);
            map.set(value, count - 1);
        }
    }

    return result;
}
