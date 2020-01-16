/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let l = 0;
    for (let j = 0; j < n; j++) {
        let i = l;
        for (; i < m; i++) {
            if (nums1[i] > nums2[j]) {
                for (let k = m - 1; k >= i; k--) {
                    nums1[k + 1] = nums1[k];
                }

                nums1[i] = nums2[j];
                break;
            }
        }

        if (i === m) {
            nums1[i] = nums2[j];
        }

        m++;
        l = i + 1;
    }

    return nums1;
}

module.exports = merge;
