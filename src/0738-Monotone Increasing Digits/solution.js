/**
 * https://leetcode-cn.com/problems/monotone-increasing-digits/submissions/
 * @param {number} N
 * @return {number}
 */
function monotoneIncreasingDigits(N) {
    const nums = String(N).split('');

    const last = nums.length - 1;
    let i = 0;
    while (i < last) {
        if (nums[i] > nums[i + 1]) {
            break;
        }
        i++;
    }
    if (i !== last) {
        for (let j = i; j >= 0; j--) {
            if (nums[j] !== nums[j - 1] || j === 0) {
                nums[j]--;
                for (let k = j + 1; k <= last; k++) {
                    nums[k] = 9;
                }
                break;
            }
        }
    }
    return nums.join('');
}
