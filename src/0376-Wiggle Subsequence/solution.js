/**
 * 最大摆动子序列
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength(nums) {
    const { length } = nums;
    if (length < 2) return length;

    let preDiff = nums[1] - nums[0];
    let max = preDiff === 0 ? 1 : 2;
    for (const [index, num] of nums.entries()) {
        const diff = num - nums[index - 1];
        // 为什么不处理 diff === 0 的情况，考虑下：[1, 2, 2, 3, 1]
        if ((diff > 0 && preDiff <= 0) || (diff < 0 && preDiff >= 0)) {
            max++;
            preDiff = diff;
        }
    }
    return max;
}
