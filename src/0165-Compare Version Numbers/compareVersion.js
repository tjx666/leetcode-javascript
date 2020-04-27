/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
    const nums1 = version1.split('.').map((numStr) => parseInt(numStr, 10));
    const nums2 = version2.split('.').map((numStr) => parseInt(numStr, 10));

    const minLength = Math.min(nums1.length, nums2.length);
    let i = 0;
    for (; i < minLength; i++) {
        if (nums1[i] > nums2[i]) {
            return 1;
        }

        if (nums1[i] < nums2[i]) {
            return -1;
        }
    }

    if (nums1.length < i) {
        for (; i < nums2.length; i++) {
            if (nums2[i]) return -1;
        }
    } else {
        for (; i < nums1.length; i++) {
            if (nums1[i]) return 1;
        }
    }

    return 0;
}
