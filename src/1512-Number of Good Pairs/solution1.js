/**
 * 题述：
 * 给你一个整数数组 nums。如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组好数对。返回好数对的数目。
 * 思路：
 * 由于数据规模是一维的，所以最好将时间复杂度优化到线性复杂度及更优
 * 想要计算出所有的好数，一定要将所有元素遍历一遍，因此，时间复杂度不可能低于 n
 * 遍历 nums 的过程中，要想每遍历一个元素就可以更新出所有的好数对，需要保存遍历过程中的信息
 * 这道题保存每个值的个数即可
 * 时间复杂度：n
 * 空间复杂度: n，最高的情况就是 nums 中元素都不相同
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
    let pairs = 0;
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        const value = nums[i];
        const count = ~~map.get(value);
        pairs += count;
        map.set(value, count + 1);
    }
    return pairs;
}
