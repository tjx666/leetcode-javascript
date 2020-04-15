/**
 * 题述：求两个数组的交集
 *
 * 思路：将其中一个数组存到 set 中，遍历另一个数组的每一个元素，将其中也出现在 set 中的提取到结果数组即可
 *
 * 算法复杂度：m + n
 * 空间复杂度：m + n
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    const nums1Set = new Set(nums1);
    const traveledSet = new Set();
    const result = [];
    for (let i = 0, len = nums2.length; i < len; i++) {
        const val = nums2[i];
        if (nums1Set.has(val) && !traveledSet.has(val)) {
            result.push(val);
            traveledSet.add(val);
        }
    }
    return result;
}
