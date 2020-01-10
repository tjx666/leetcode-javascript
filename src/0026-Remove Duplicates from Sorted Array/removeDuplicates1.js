/**
 * 主要考察数组的删除操作，其实就是将删除的元素后所有元素前移一位
 * !: 注意：
 * 1. 删除元素后记得调整数组的 length
 * 2. 如果遍历到某个元素后发现和前面元素相同的，然后进行了删除，那么该次遍历结束时 i 不用 +1
 *
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length < 2) return nums.length;

    let i = 1;
    while (i < nums.length) {
        if (nums[i] === nums[i - 1]) {
            for (let j = i; j < nums.length; j++) {
                nums[j - 1] = nums[j];
            }
            nums.length--;
        } else {
            i++;
        }
    }

    return nums.length;
}

module.exports = removeDuplicates;
