/**
 * 题述：暴力法
 * 思路：两层循环，外层循环遍历起始点，里成循环遍历终点，遍历终点时可以利用前面遍历时的计算结果
 * 时间复杂度：2²
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let answer = -Infinity;
    for (let i = 0, len = nums.length; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += nums[j];
            answer = Math.max(sum, answer);
        }
    }
    return answer;
}

module.exports = maxSubArray;
