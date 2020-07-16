/**
 * 题述：
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 思路：双指针是原地修改数组的常见技巧了，类似的题还要奇偶排序
 * 时间复杂度：n, fast 遍历到头就结束了
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    const { length } = nums;
    if (length <= 2) return length;

    let slow = 0;
    let sameCount = 1;
    for (let fast = 1, len = nums.length; fast < len; fast++) {
        if (nums[fast] === nums[fast - 1]) {
            sameCount++;
            if (sameCount === 2) {
                nums[slow + 1] = nums[fast];
                slow++;
            }
        } else {
            sameCount = 1;
            nums[slow + 1] = nums[fast];
            slow++;
        }
    }
    return slow + 1;
}
