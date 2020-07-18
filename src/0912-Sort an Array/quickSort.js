/**
 * 题述：排序
 * 思路：快排，核心思想就是让每一个元素的右边元素大于它，左边的元素小于它
 * 时间复杂度：nlgn
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
    function quickSort(left, right) {
        if (left >= right) return;

        let ref = left;
        let i = left;
        let j = right;
        const refVal = nums[ref];
        while (i < j) {
            while (j > ref && nums[j] >= refVal) {
                j--;
            }
            nums[ref] = nums[j];
            ref = j;

            while (i < ref && nums[i] <= refVal) {
                i++;
            }
            nums[ref] = nums[i];
            ref = i;
        }
        nums[ref] = refVal;
        quickSort(left, ref - 1);
        quickSort(ref + 1, right);
    }
    quickSort(0, nums.length - 1);
    return nums;
}
