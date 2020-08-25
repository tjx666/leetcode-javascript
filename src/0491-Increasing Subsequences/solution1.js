/**
 * 题述：递增子序列
 * 思路：
 * 很直观的一种思路，每遍历一个元素就到已有的结果中找符合条件的数组元素进行组合，条件为当前元素大于结果中数组元素最后一个元素
 * 除了通过这种方式增加结果元素，当前元素还可以和已遍历过的每个元素进行组合
 * 注意结果要去重
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsequences(nums) {
    const { length } = nums;
    if (length <= 1) return [];

    const set = new Set();
    let result = [];
    if (nums[1] >= nums[0]) {
        result = [[nums[0], nums[1]]];
        set.add(result[0].join());
    }
    for (let i = 2; i < length; i++) {
        for (let j = 0, resultLength = result.length; j < resultLength; j++) {
            const item = result[j];
            if (nums[i] >= item[item.length - 1]) {
                const newItem = [...item, nums[i]];
                const newItemStr = newItem.join();
                if (!set.has(newItemStr)) {
                    result.push(newItem);
                    set.add(newItemStr);
                }
            }
        }
        for (let j = 0; j < i; j++) {
            if (nums[i] >= nums[j]) {
                const newItem = [nums[j], nums[i]];
                const newItemStr = newItem.join();
                if (!set.has(newItemStr)) {
                    result.push(newItem);
                    set.add(newItemStr);
                }
            }
        }
    }
    return result;
}
