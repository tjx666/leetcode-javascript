/**
 * 题述：
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 思路：
 * 直接排序其实就可以得到结果，时间复杂度是 nlogn，题目要求不能使用排序
 * 最直观的做法就是直接遍历一遍统计 0, 1, 2 的个数再修改原数组
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val === 0) {
            zeroCount++;
        } else if (val === 1) {
            oneCount++;
        } else {
            twoCount++;
        }
    }

    let index = 0;
    for (let i = 0; i < zeroCount; i++, index++) {
        nums[index] = 0;
    }

    for (let j = 0; j < oneCount; j++, index++) {
        nums[index] = 1;
    }

    for (let k = 0; k < twoCount; k++, index++) {
        nums[index] = 2;
    }
}
