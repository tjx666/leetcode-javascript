/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (nums2[p2] > nums1[p1]) {
            nums1[p] = nums2[p2];
            p2--;
        } else {
            nums1[p] = nums1[p1];
            p1--;
        }
        p--;
    }

    if (p1 < 0) {
        for (let i = 0; i <= p2; i++) {
            nums1[i] = nums2[i];
        }
    }

    return nums1;
}

module.exports = merge;
