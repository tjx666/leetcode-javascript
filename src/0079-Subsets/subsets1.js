/**
 * 题述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 思路：迭代
 * 时间复杂度：n 乘以 2 的 n 次方，遍历 2 的 n 次方，并且每次添加一个集合时需要 n 次
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const result = [[]];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0, len = result.length; j < len; j++) {
            result.push([...result[j], nums[i]]);
        }
    }
    return result;
}
