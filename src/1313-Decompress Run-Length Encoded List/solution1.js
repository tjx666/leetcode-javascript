/**
 * 题述：解压缩编码列表
 * 思路：按部就班
 * 时间复杂度：原本数据的长度
 * 空间复杂度：解空间不算就是 1
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
    // 预分配数组，最小长度为 nums.length / 2
    const minLen = nums.length / 2;
    const result = new Array(minLen);
    let index = 0;
    for (let i = 0; i <= nums.length - 2; i += 2) {
        for (let j = 0; j < nums[i]; j++) {
            result[index] = nums[i + 1];
            index++;
        }
    }
    return result;
}
