/**
 * 题述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 思路：回溯
 * 时间复杂度：n 乘以 2 的 n 次方
 * 空间复杂度：0，如果栈空间也算就是 2 的 n 次方
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const result = [];
    const { length } = nums;
    const path = [];
    let subsetElementsCount = 0;
    function backTrace(start, currentCount) {
        if (path.length === subsetElementsCount) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= length - currentCount; i++) {
            path.push(nums[i]);
            backTrace(i + 1, currentCount - 1);
            path.pop();
        }
    }

    for (; subsetElementsCount < length + 1; subsetElementsCount++) {
        backTrace(0, subsetElementsCount);
    }

    return result;
}
