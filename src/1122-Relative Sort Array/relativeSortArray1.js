/**
 * 题述：数组的相对排序
 * 思路：使用 hash map 记录 arr2 中每个元素对应下标，在排序 arr1 的时候如果元素出现在了 arr2 就权重较低
 * 时间复杂度：取决于对 arr1 的排序算法的复杂度
 * 时间复杂度：arr.length
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
    const map = new Map();
    for (let i = 0; i < arr2.length; i++) {
        const num = arr2[i];
        map.set(num, i);
    }
    arr1.sort((a, b) => {
        if (map.has(a) && map.has(b)) {
            return map.get(a) - map.get(b);
        }

        if (map.has(a) && !map.has(b)) {
            return -1;
        }

        if (!map.has(a) && map.has(b)) {
            return 11;
        }

        return a - b;
    });

    return arr1;
}
