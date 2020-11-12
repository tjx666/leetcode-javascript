/**
 * 题述：下一个排列
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    let temp = null;
    let i = nums.length - 1;
    while (i > 0) {
        if (nums[i] > nums[i - 1]) {
            break;
        }
        i--;
    }

    let j = nums.length - 1;
    while (j >= i) {
        if (nums[j] > nums[i - 1]) {
            break;
        }
        j--;
    }

    [nums[i - 1], nums[j]] = [nums[j], nums[i]];
    temp = nums[i - 1];
    nums[i - 1] = nums[j];
    nums[j] = temp;
    for (let p = i, q = nums.length - 1; p <= q; p++, q--) {
        temp = nums[p];
        nums[p] = nums[q];
        nums[q] = temp;
    }
}

// nextPermutation([1, 1, 5]);
