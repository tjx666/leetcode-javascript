/**
 * 题述：两数之和
 * 思路：
 * 如果数组是有序的，问题会更简单，可以使用首尾双指针，贪心策略将首尾双指针往中间靠
 * 但是这道题如果先排序那就拿不到之前的顺序了，所以需要复制一份再排序，在已排序的数组中拿到两个值后再从原数组中获取正确的下标
 * 时间复杂度：nlog₂n，取决于排序的时间复杂度
 * 空间复杂度：1, 取决于排序的空间复杂度
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @example
 *
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] or [1, 0]
 *
 */
function twoSum(nums, target) {
    // 先排序
    const sortedArray = [...nums].sort((a, b) => a - b);
    const { length } = nums;
    let i = 0;
    let j = length - 1;
    while (i < j) {
        const sum = sortedArray[i] + sortedArray[j];
        if (sum === target) {
            break;
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }

    // 题目说了肯定有答案，因此这里不需要考虑没有结果的情况
    const result = [];
    let k = 0;
    for (; k < length; k++) {
        if (nums[k] === sortedArray[i]) {
            result.push(k);
            break;
        }
    }

    for (let l = 0; l < length; l++) {
        // 考虑到也可能两个数值是相同的，因此第二个数的下标不能和第一个数的下标 k 相等
        if (l !== k && nums[l] === sortedArray[j]) {
            result.push(l);
            return result;
        }
    }
}

module.exports = twoSum;
