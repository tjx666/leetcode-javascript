/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        const val = nums[i];
        if (map.has(val) && Math.abs(i - map.get(val)) <= k) {
            return true;
        }
        map.set(val, i);
    }

    return false;
}
