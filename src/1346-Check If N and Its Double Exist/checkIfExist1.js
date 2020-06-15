/**
 * 题述：arr 是整数数组，检查数组中是否存在两个不同位置的下标 i, arr[i] 是 arr[j] 的两倍
 * 限制：
 * 2 <= arr.length <= 500
 * -10^3 <= arr[i] <= 10^3
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist(arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (value === 0 || set.has(value)) return true;
        set.set(value * 2);
        set.set(value / 2);
    }
    return false;
}
