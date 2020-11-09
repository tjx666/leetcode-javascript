/**
 * 题述：通过翻转子数组使两个数组相等
 * 思路：其实就是考排序后是否完全一样
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
function canBeEqual(target, arr) {
    const sortedTarget = new Int8Array(target).sort();
    const sortedArr = new Int8Array(arr).sort();
    return sortedTarget.every((v, i) => v === sortedArr[i]);
}
