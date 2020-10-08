/**
 * 题述：
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 思路：三指针，一个快指针，2个慢指针
 * 时间复杂度：n
 * 空间复杂度：常数级
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let ptr0 = 0;
    let ptr1 = 0;

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val === 0) {
            [nums[ptr0], nums[i]] = [nums[i], nums[ptr0]];
            if (ptr0 < ptr1) {
                [nums[ptr1], nums[i]] = [nums[i], nums[ptr1]];
            }
            ptr0++;
            ptr1++;
        } else if (val === 1) {
            [nums[ptr1], nums[i]] = [nums[i], nums[ptr1]];
            ptr1++;
        }
    }
}
